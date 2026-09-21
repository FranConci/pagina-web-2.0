import express from "express";
import dotenv from "dotenv";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "123456";


/* =========================================================
   BASE DE DATOS
========================================================= */

const db = new Database(
    path.join(__dirname, "tienda.db")
);

db.pragma("journal_mode = WAL");


/* =========================================================
   TABLAS
========================================================= */

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        price REAL NOT NULL,
        stock INTEGER NOT NULL DEFAULT 0,
        image TEXT NOT NULL,
        description TEXT DEFAULT '',
        sizes TEXT DEFAULT '[]',
        colors TEXT DEFAULT '[]',
        active INTEGER DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT NOT NULL,
        customer_email TEXT NOT NULL,
        customer_phone TEXT NOT NULL,
        customer_address TEXT NOT NULL,
        customer_city TEXT NOT NULL,
        total REAL NOT NULL,
        status TEXT DEFAULT 'pending',
        payment_id TEXT,
        preference_id TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        product_name TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        unit_price REAL NOT NULL,
        size TEXT,
        color TEXT
    );
`);


/* =========================================================
   PRODUCTOS INICIALES
========================================================= */

const productCount =
    db.prepare(
        "SELECT COUNT(*) AS total FROM products"
    ).get().total;


if (productCount === 0) {

    const insert = db.prepare(`
        INSERT INTO products (
            name,
            category,
            price,
            stock,
            image,
            description,
            sizes,
            colors
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);


    const initialProducts = [

        [
            "Remera Urbana",
            "Ropa",
            18000,
            20,
            "imagenes/remera1.jpg",
            "Remera cómoda para uso diario.",
            JSON.stringify(["S", "M", "L", "XL"]),
            JSON.stringify(["Negro", "Blanco"])
        ],


        [
            "Buzo Clásico",
            "Ropa",
            32000,
            10,
            "imagenes/foto.jpg",
            "Buzo ideal para días frescos.",
            JSON.stringify(["S", "M", "L", "XL"]),
            JSON.stringify(["Negro", "Gris"])
        ]

    ];


    const transaction =
        db.transaction(
            function () {

                for (
                    const product of initialProducts
                ) {

                    insert.run(
                        ...product
                    );

                }

            }
        );


    transaction();
}


/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
    express.json({
        limit: "2mb"
    })
);

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(
    express.static(
        path.join(
            __dirname,
            "public"
        )
    )
);


/* =========================================================
   HELPERS
========================================================= */

function formatProduct(product) {

    return {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
        image: product.image,
        description: product.description,
        sizes: JSON.parse(product.sizes || "[]"),
        colors: JSON.parse(product.colors || "[]")
    };

}


function isAdmin(req) {

    return (
        req.headers["x-admin-password"] ===
        ADMIN_PASSWORD
    );

}


/* =========================================================
   PRODUCTOS
========================================================= */

app.get(
    "/api/products",
    function (req, res) {

        const products =
            db.prepare(`
                SELECT *
                FROM products
                WHERE active = 1
                ORDER BY id DESC
            `).all();


        res.json(
            products.map(
                formatProduct
            )
        );

    }
);


/* =========================================================
   CREAR PRODUCTO
========================================================= */

app.post(
    "/api/products",
    function (req, res) {

        if (!isAdmin(req)) {

            return res
                .status(401)
                .json({
                    error:
                        "No autorizado"
                });

        }


        const {
            name,
            category,
            price,
            stock,
            image,
            description,
            sizes,
            colors
        } = req.body;


        if (
            !name ||
            !category ||
            !image
        ) {

            return res
                .status(400)
                .json({
                    error:
                        "Faltan datos."
                });

        }


        const result =
            db.prepare(`
                INSERT INTO products (
                    name,
                    category,
                    price,
                    stock,
                    image,
                    description,
                    sizes,
                    colors
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `).run(

                name,

                category,

                Number(price),

                Number(stock),

                image,

                description || "",

                JSON.stringify(
                    sizes || []
                ),

                JSON.stringify(
                    colors || []
                )

            );


        const product =
            db.prepare(
                "SELECT * FROM products WHERE id = ?"
            ).get(
                result.lastInsertRowid
            );


        res.json(
            formatProduct(
                product
            )
        );

    }
);


/* =========================================================
   ELIMINAR PRODUCTO
========================================================= */

app.delete(
    "/api/products/:id",
    function (req, res) {

        if (!isAdmin(req)) {

            return res
                .status(401)
                .json({
                    error:
                        "No autorizado"
                });

        }


        db.prepare(`
            UPDATE products
            SET active = 0
            WHERE id = ?
        `).run(
            Number(req.params.id)
        );


        res.json({
            success: true
        });

    }
);


/* =========================================================
   CHECKOUT
========================================================= */

app.post(
    "/api/checkout",
    async function (req, res) {

        try {

            const {
                customer,
                items
            } = req.body;


            if (
                !customer ||
                !items ||
                !Array.isArray(items) ||
                items.length === 0
            ) {

                return res
                    .status(400)
                    .json({
                        error:
                            "Datos inválidos."
                    });

            }


            let total = 0;

            const validatedItems = [];


            for (
                const item of items
            ) {

                const product =
                    db.prepare(`
                        SELECT *
                        FROM products
                        WHERE id = ?
                        AND active = 1
                    `).get(
                        Number(
                            item.productId
                        )
                    );


                if (!product) {

                    return res
                        .status(400)
                        .json({
                            error:
                                "Producto no encontrado."
                        });

                }


                const quantity =
                    Number(
                        item.quantity
                    );


                if (
                    quantity <= 0 ||
                    quantity >
                    product.stock
                ) {

                    return res
                        .status(400)
                        .json({
                            error:
                                `Stock insuficiente para ${product.name}.`
                        });

                }


                total +=
                    product.price *
                    quantity;


                validatedItems.push({

                    product,

                    quantity,

                    size:
                        item.size ||
                        null,

                    color:
                        item.color ||
                        null

                });

            }


            const createOrder =
                db.transaction(
                    function () {

                        const result =
                            db.prepare(`
                                INSERT INTO orders (
                                    customer_name,
                                    customer_email,
                                    customer_phone,
                                    customer_address,
                                    customer_city,
                                    total
                                )
                                VALUES (?, ?, ?, ?, ?, ?)
                            `).run(

                                customer.name,

                                customer.email,

                                customer.phone,

                                customer.address,

                                customer.city,

                                total

                            );


                        const orderId =
                            Number(
                                result.lastInsertRowid
                            );


                        const insertItem =
                            db.prepare(`
                                INSERT INTO order_items (
                                    order_id,
                                    product_id,
                                    product_name,
                                    quantity,
                                    unit_price,
                                    size,
                                    color
                                )
                                VALUES (?, ?, ?, ?, ?, ?, ?)
                            `);


                        for (
                            const item
                                of validatedItems
                        ) {

                            insertItem.run(

                                orderId,

                                item.product.id,

                                item.product.name,

                                item.quantity,

                                item.product.price,

                                item.size,

                                item.color

                            );

                        }


                        return orderId;

                    }
                );


            const orderId =
                createOrder();


            /*
             * Si todavía no configuraste Mercado Pago,
             * guardamos el pedido y devolvemos el número.
             */

            if (!MP_ACCESS_TOKEN) {

                return res.json({

                    orderId,

                    paymentConfigured:
                        false,

                    message:
                        "Pedido guardado correctamente."

                });

            }


            /* =================================================
               MERCADO PAGO
            ================================================== */

            const preferenceItems =
                validatedItems.map(
                    function (item) {

                        return {

                            id:
                                String(
                                    item.product.id
                                ),

                            title:
                                item.product.name,

                            quantity:
                                item.quantity,

                            currency_id:
                                "ARS",

                            unit_price:
                                Number(
                                    item.product.price
                                )

                        };

                    }
                );


            const preference = {

                items:
                    preferenceItems,

                external_reference:
                    String(
                        orderId
                    ),

                payer: {

                    name:
                        customer.name,

                    email:
                        customer.email

                },

                back_urls: {

                    success:
                        `${BASE_URL}/?payment=success&order=${orderId}`,

                    failure:
                        `${BASE_URL}/?payment=failure&order=${orderId}`,

                    pending:
                        `${BASE_URL}/?payment=pending&order=${orderId}`

                },

                auto_return:
                    "approved"

            };


            const mpResponse =
                await fetch(
                    "https://api.mercadopago.com/checkout/preferences",
                    {

                        method:
                            "POST",

                        headers: {

                            Authorization:
                                `Bearer ${MP_ACCESS_TOKEN}`,

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify(
                                preference
                            )

                    }
                );


            const mpData =
                await mpResponse.json();


            if (
                !mpResponse.ok
            ) {

                console.error(
                    mpData
                );

                return res
                    .status(500)
                    .json({
                        error:
                            "No se pudo crear el pago."
                    });

            }


            db.prepare(`
                UPDATE orders
                SET preference_id = ?
                WHERE id = ?
            `).run(

                mpData.id,

                orderId

            );


            res.json({

                orderId,

                paymentConfigured:
                    true,

                paymentUrl:
                    mpData.init_point

            });

        } catch (error) {

            console.error(
                error
            );


            res
                .status(500)
                .json({
                    error:
                        "Error procesando el pedido."
                });

        }

    }
);


/* =========================================================
   PEDIDOS ADMIN
========================================================= */

app.get(
    "/api/admin/orders",
    function (req, res) {

        if (!isAdmin(req)) {

            return res
                .status(401)
                .json({
                    error:
                        "No autorizado"
                });

        }


        const orders =
            db.prepare(`
                SELECT *
                FROM orders
                ORDER BY id DESC
            `).all();


        res.json(
            orders
        );

    }
);


/* =========================================================
   WEBHOOK
========================================================= */

app.post(
    "/api/webhook/mercadopago",
    async function (req, res) {

        /*
         * Mercado Pago enviará acá las
         * actualizaciones de los pagos.
         *
         * Para producción deberemos agregar
         * la validación de firma y actualización
         * de stock definitiva.
         */

        console.log(
            "Webhook Mercado Pago:",
            req.body
        );


        res.sendStatus(
            200
        );

    }
);


/* =========================================================
   RUTA PRINCIPAL
========================================================= */

app.get(
    "*",
    function (req, res) {

        res.sendFile(
            path.join(
                __dirname,
                "public",
                "index.html"
            )
        );

    }
);


/* =========================================================
   SERVIDOR
========================================================= */

app.listen(
    PORT,
    function () {

        console.log(
            "================================="
        );

        console.log(
            "TiendaPlus funcionando"
        );

        console.log(
            `http://localhost:${PORT}`
        );

        console.log(
            "================================="
        );

    }
);