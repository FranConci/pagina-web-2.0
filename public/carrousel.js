/* =========================================================
   PRODUCTOS INICIALES
========================================================= */

const defaultProducts = [

    {
        id: 1,
        name: "Remera estilo anime",
        category: "Remeras y camisas",
        price: 30000,
        stock: 15,
        image: "imagenes/remera1.jpg",
        description: "Remera cómoda para uso diario.",
        sizes: ["S", "M", "L", "XL", "XXL"],
    },

    {
        id: 2,
        name: "Remera estilo gotico",
        category: "Remeras y camisas",
        price: 30000,
        stock: 15,
        image: "imagenes/remera2.jpg",
        description: "Remera cómoda para uso diario.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Negro", "Blanco"]
    },

    {
        id: 3,
        name: "Remera estilo phonk",
        category: "Remeras y camisas",
        price: 30000,
        stock: 15,
        image: "imagenes/remera5.jpg",
        description: "Remera cómoda para uso diario.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Negro", "Blanco"]
    },


    {
        id: 4,
        name: "Camisa Casual",
        category: "Remeras y camisas",
        price: 32000,
        stock: 9,
        image: "imagenes/camisa3.jpg",
        description: "Ideal para los días frescos.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Gris"]
    },

     {
        id: 5,
        name: "Camisa Casual",
        category: "Remeras y camisas",
        price: 32000,
        stock: 9,
        image: "imagenes/camisa4.jpg",
        description: "Ideal para los días frescos.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Gris"]
    },

    {
        id: 6,
        name: "Pantalón Clásico",
        category: "Pantalones y Shorts",
        price: 38000,
        stock: 10,
        image: "imagenes/pantalon1.jpg",
        description: "Pantalón cómodo para uso diario.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul"]
    },

    {
        id: 7,
        name: "Pantalón Clásico",
        category: "Pantalones y Shorts",
        price: 30000,
        stock: 10,
        image: "imagenes/pantalon2.jpg",
        description: "Pantalón cómodo para uso diario.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul"]
    },

    {
        id: 8,
        name: "Pantalón Clásico",
        category: "Pantalones y Shorts",
        price: 38000,
        stock: 10,
        image: "imagenes/short3.jpg",
        description: "Pantalón cómodo para uso diario.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul"]
    },

    {
        id: 9,
        name: "Pantalón Clásico",
        category: "Pantalones y Shorts",
        price: 38000,
        stock: 10,
        image: "imagenes/short4.jpg",
        description: "Pantalón cómodo para uso diario.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul"]
    },

    {
        id: 10,
        name: "Pantalón Clásico",
        category: "Pantalones y Shorts",
        price: 38000,
        stock: 10,
        image: "imagenes/short5.jpg",
        description: "Pantalón cómodo para uso diario.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul"]
    },

    {
        id: 11,
        name: "Pulseras Modernas por pack 12",
        category: "Accesorios",
        price: 12000,
        stock: 15,
        image: "imagenes/pulseras1.jpg",
        description: "Accesorio moderno para completar tu estilo.",
        sizes: [],
        colors: ["Negro", "Plateado"]
    },

     {
        id: 12,
        name: "Pulsera Moderna",
        category: "Accesorios",
        price: 12000,
        stock: 15,
        image: "imagenes/pulseras2.jpg",
        description: "Accesorio moderno para completar tu estilo.",
        sizes: [],
        colors: ["Negro", "Plateado"]
    },

     {
        id: 13,
        name: "Pulsera Moderna",
        category: "Accesorios",
        price: 12000,
        stock: 15,
        image: "imagenes/pulseras3.jpg",
        description: "Accesorio moderno para completar tu estilo.",
        sizes: [],
        colors: ["Negro", "Plateado"]
    },

     {
        id: 14,
        name: "Collar de Cuernos",
        category: "Accesorios",
        price: 12000,
        stock: 15,
        image: "imagenes/collar4.jpg",
        description: "Accesorio moderno para completar tu estilo.",
        sizes: [],
        colors: ["Negro", "Plateado"]
    },

     {
        id: 15,
        name: "Collar de Crucifico",
        category: "Accesorios",
        price: 12000,
        stock: 15,
        image: "imagenes/collar5.jpg",
        description: "Accesorio moderno para completar tu estilo.",
        sizes: [],
        colors: ["Negro", "Plateado"]
    },

    {
        id: 16,
        name: "Bolso Negro",
        category: "Bolsos de mano",
        price: 42000,
        stock: 7,
        image: "imagenes/bolso1.jpg",
        description: "Bolso práctico y moderno.",
        sizes: [],
        colors: ["Negro"]
    },

    {
        id: 17,
        name: "Bolso de mano Blanco",
        category: "Bolsos de mano",
        price: 42000,
        stock: 7,
        image: "imagenes/bolso2.jpg",
        description: "Bolso práctico y moderno.",
        sizes: [],
        colors: ["Negro"]
    },

    {
        id: 18,
        name: "Bolso Negro y Blanco",
        category: "Bolsos de mano",
        price: 42000,
        stock: 7,
        image: "imagenes/bolso3.jpg",
        description: "Bolso práctico y moderno.",
        sizes: [],
        colors: ["Negro"]
    },

    {
        id: 19,
        name: "Bolso Negro y Blanco",
        category: "Bolsos de mano",
        price: 42000,
        stock: 7,
        image: "imagenes/bolso4.jpg",
        description: "Bolso práctico y moderno.",
        sizes: [],
        colors: ["Negro"]
    },

    {
        id: 20,
        name: "Bolso Negro y Amarillo",
        category: "Bolsos de mano",
        price: 42000,
        stock: 7,
        image: "imagenes/bolso5.jpg",
        description: "Bolso práctico y moderno.",
        sizes: [],
        colors: ["Negro"]
    },

    {
        id: 21,
        name: "Lentes Urbanos",
        category: "Lentes",
        price: 18000,
        stock: 9,
        image: "imagenes/lentes1.jpg",
        description: "Lentes modernos para todos los días.",
        sizes: [],
        colors: ["Negro", "Marrón"]
    },

    {
        id: 22,
        name: "Lentes Urbanos",
        category: "Lentes",
        price: 18000,
        stock: 9,
        image: "imagenes/lentes2.jpg",
        description: "Lentes modernos para todos los días.",
        sizes: [],
        colors: ["Negro", "Marrón"]
    },

    {
        id: 23,
        name: "Lentes Urbanos",
        category: "Lentes",
        price: 18000,
        stock: 9,
        image: "imagenes/lentes3.jpg",
        description: "Lentes modernos para todos los días.",
        sizes: [],
        colors: ["Negro", "Marrón"]
    },

    {
        id: 24,
        name: "Lentes Urbanos",
        category: "Lentes",
        price: 18000,
        stock: 9,
        image: "imagenes/lentes4.jpg",
        description: "Lentes modernos para todos los días.",
        sizes: [],
        colors: ["Negro", "Marrón"]
    },

    {
        id: 25,
        name: "Lentes Urbanos",
        category: "Lentes",
        price: 18000,
        stock: 9,
        image: "imagenes/lentes5.jpg", 
        description: "Lentes modernos para todos los días.",
        sizes: [],
        colors: ["Negro", "Marrón"]
    },

    {
        id: 26,
        name: "Vaso Decorativo",
        category: "Vasos",
        price: 10000,
        stock: 20,
        image: "imagenes/vasos1.jpg",
        description: "Vaso decorativo y funcional.",
        sizes: [],
        colors: ["Transparente"]
    },

    {
        id: 27,
        name: "Vaso Decorativo",
        category: "Vasos",
        price: 10000,
        stock: 20,
        image: "imagenes/vasos2.jpg",
        description: "Vaso decorativo y funcional.",
        sizes: [],
        colors: ["Transparente"]
    },

    {
        id: 28,
        name: "Vaso Decorativo",
        category: "Vasos",
        price: 10000,
        stock: 20,
        image: "imagenes/vasos3.jpg",
        description: "Vaso decorativo y funcional.",
        sizes: [],
        colors: ["Transparente"]
    },

    {
        id: 29,
        name: "Vaso Decorativo",
        category: "Vasos",
        price: 10000,
        stock: 20,
        image: "imagenes/vasos4.jpg",
        description: "Vaso decorativo y funcional.",
        sizes: [],
        colors: ["Transparente"]
    },

    {
        id: 30,
        name: "Vaso Decorativo",
        category: "Vasos",
        price: 10000,
        stock: 20,
        image: "imagenes/vasos5.jpg",
        description: "Vaso decorativo y funcional.",
        sizes: [],
        colors: ["Transparente"]
    },



    {
        id: 31,
        name: "Anillo Clásico",
        category: "Anillos",
        price: 15000,
        stock: 12,
        image: "imagenes/anillos.jpg",
        description: "Anillo elegante para cualquier ocasión.",
        sizes: ["16", "18", "20", "22"],
        colors: ["Plateado", "Dorado"]
    },

    {
        id: 32,
        name: "Anillo Clásico",
        category: "Anillos",
        price: 15000,
        stock: 12,
        image: "imagenes/anillos2.jpg",
        description: "Anillo elegante para cualquier ocasión.",
        sizes: ["16", "18", "20", "22"],
        colors: ["Plateado", "Dorado"]
    },

    {
        id: 33,
        name: "Anillo Clásico",
        category: "Anillos",
        price: 15000,
        stock: 12,
        image: "imagenes/anillos3.jpg",
        description: "Anillo elegante para cualquier ocasión.",
        sizes: ["16", "18", "20", "22"],
        colors: ["Plateado", "Dorado"]
    },

    {
        id: 34,
        name: "Anillo Clásico",
        category: "Anillos",
        price: 15000,
        stock: 12,
        image: "imagenes/anillos4.jpg",
        description: "Anillo elegante para cualquier ocasión.",
        sizes: ["16", "18", "20", "22"],
        colors: ["Plateado", "Dorado"]
    },

    {
        id: 35,
        name: "Anillo Clásico",
        category: "Anillos",
        price: 15000,
        stock: 12,
        image: "imagenes/anillos5.jpg",
        description: "Anillo elegante para cualquier ocasión.",
        sizes: ["16", "18", "20", "22"],
        colors: ["Plateado", "Dorado"]
    },


];


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const PRODUCTS_STORAGE_KEY = "products";
const DELETED_DEFAULTS_KEY = "deletedDefaultProducts";
const PRODUCT_IMAGE_VERSION = "3";


const defaultProductIds =
    new Set(
        defaultProducts.map(
            function (product) {
                return product.id;
            }
        )
    );


/* =========================================================
   LOCAL STORAGE
========================================================= */

let savedProducts = null;

try {

    savedProducts =
        JSON.parse(
            localStorage.getItem(
                PRODUCTS_STORAGE_KEY
            )
        );

} catch (error) {

    savedProducts = null;

}


let deletedDefaultProductIds = [];

try {

    deletedDefaultProductIds =
        JSON.parse(
            localStorage.getItem(
                DELETED_DEFAULTS_KEY
            )
        ) || [];

    if (
        !Array.isArray(
            deletedDefaultProductIds
        )
    ) {

        deletedDefaultProductIds = [];

    }

} catch (error) {

    deletedDefaultProductIds = [];

}


/* =========================================================
   PRODUCTOS
   LOS DEFAULT SIEMPRE TOMAN LOS DATOS ACTUALES DEL CÓDIGO
   Y LOS PRODUCTOS AGREGADOS DESDE ADMIN SE CONSERVAN.
========================================================= */

let customProducts =
    Array.isArray(savedProducts)
        ? savedProducts.filter(
            function (product) {

                const oldProducts = [
                    "Zapatillas Urbanas",
                    "Peluche Especial",
                    "Juego de Sábanas",
                    "Colcha Moderna",
                    "Alcochado Premium",
                    "Juguete Infantil"
                ];

                return (
                    !defaultProductIds.has(
                        Number(product.id)
                    ) &&
                    !oldProducts.includes(
                        product.name
                    )
                );

            }
        )
        : [];


let products =
    defaultProducts
        .filter(
            function (product) {
                return !deletedDefaultProductIds.includes(
                    product.id
                );
            }
        )
        .concat(
            customProducts
        );

/* Evitar productos de anillos repetidos */
const ringImages = new Set();

products = products.filter(function (product) {

    if (
        product.category === "Anillos" &&
        product.image
    ) {
        if (ringImages.has(product.image)) {
            return false;
        }

        ringImages.add(product.image);
    }

    return true;
});


/* =========================================================
   CORREGIR CATEGORÍAS ANTIGUAS
========================================================= */

function normalizeCategory(
    category
) {

    const categories = {

        "Ropa":
            "Remeras y camisas",

        "Pantalones":
            "Pantalones y Shorts",

        "Bolsos":
            "Bolsos de mano",

        "accesorios":
            "Accesorios"

    };


    return (
        categories[category] ||
        category
    );

}


products =
    products.map(
        function (product) {

            return {

                ...product,

                id:
                    Number(
                        product.id
                    ),

                category:
                    normalizeCategory(
                        product.category
                    ),

                sizes:
                    Array.isArray(
                        product.sizes
                    )
                        ? product.sizes
                        : [],

                colors:
                    Array.isArray(
                        product.colors
                    )
                        ? product.colors
                        : []

            };

        }
    );


saveProducts();


/* =========================================================
   CARRITO
========================================================= */

let cart = [];

try {

    cart =
        JSON.parse(
            localStorage.getItem(
                "cart"
            )
        ) || [];

    if (
        !Array.isArray(cart)
    ) {

        cart = [];

    }

} catch (error) {

    cart = [];

}


/* =========================================================
   FAVORITOS
========================================================= */

let favorites = [];

try {

    favorites =
        JSON.parse(
            localStorage.getItem(
                "favorites"
            )
        ) || [];

    if (
        !Array.isArray(favorites)
    ) {

        favorites = [];

    }

    favorites =
        favorites.map(
            Number
        );

} catch (error) {

    favorites = [];

}


/* =========================================================
   ESTADO
========================================================= */

let currentFilter =
    "Todos";

let searchTerm =
    "";

let currentProduct =
    null;

let modalQuantity =
    1;

let selectedSize =
    null;

let selectedColor =
    null;

let toastTimer =
    null;


/* =========================================================
   DOM
========================================================= */

const productsGrid =
    document.getElementById(
        "products-grid"
    );

const productResult =
    document.getElementById(
        "product-result"
    );

const noProducts =
    document.getElementById(
        "no-products"
    );

const cartPanel =
    document.getElementById(
        "cart-panel"
    );

const cartOverlay =
    document.getElementById(
        "cart-overlay"
    );

const cartItems =
    document.getElementById(
        "cart-items"
    );

const cartTotal =
    document.getElementById(
        "cart-total"
    );

const cartCount =
    document.getElementById(
        "cart-count"
    );

const toast =
    document.getElementById(
        "toast"
    );

const productModal =
    document.getElementById(
        "product-modal"
    );

const productModalContent =
    document.getElementById(
        "modal-content"
    );


/* =========================================================
   IMAGEN
========================================================= */

function getImageSrc(
    image
) {

    if (
        !image
    ) {

        return "";

    }


    const separator =
        image.includes("?")
            ? "&"
            : "?";


    return (
        `${image}${separator}v=${PRODUCT_IMAGE_VERSION}`
    );

}


/* =========================================================
   FORMATO DE PRECIO
========================================================= */

function formatPrice(
    value
) {

    return new Intl.NumberFormat(
        "es-AR",
        {
            style:
                "currency",

            currency:
                "ARS",

            maximumFractionDigits:
                0
        }
    ).format(value);

}


/* =========================================================
   GUARDAR PRODUCTOS
========================================================= */

function saveProducts() {

    localStorage.setItem(
        PRODUCTS_STORAGE_KEY,
        JSON.stringify(
            products
        )
    );

}


function saveDeletedDefaultProducts() {

    localStorage.setItem(
        DELETED_DEFAULTS_KEY,
        JSON.stringify(
            deletedDefaultProductIds
        )
    );

}


function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(
            cart
        )
    );

}


function saveFavorites() {

    localStorage.setItem(
        "favorites",
        JSON.stringify(
            favorites
        )
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

    if (!toast) {

        return;

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2300
        );

}


/* =========================================================
   PRODUCTOS
========================================================= */

function renderProducts() {

    if (!productsGrid) {

        return;

    }


    const filtered =
        products.filter(
            function (product) {

                const category =
                    normalizeCategory(
                        product.category
                    );


                const categoryMatch =
                    currentFilter === "Todos" ||
                    category ===
                        currentFilter;


                const text =
                    (
                        product.name +
                        " " +
                        category +
                        " " +
                        product.description
                    )
                    .toLowerCase();


                const searchMatch =
                    !searchTerm ||
                    text.includes(
                        searchTerm
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    productsGrid.innerHTML =
        "";


    if (
        filtered.length ===
        0
    ) {

        if (noProducts) {

            noProducts.classList.add(
                "show"
            );

        }


        if (productResult) {

            productResult.textContent =
                "No encontramos productos.";

        }


        lucide.createIcons();

        return;

    }


    if (noProducts) {

        noProducts.classList.remove(
            "show"
        );

    }


    if (productResult) {

        productResult.textContent =
            `Mostrando ${filtered.length} producto${filtered.length !== 1 ? "s" : ""}`;

    }


    filtered.forEach(
        function (product) {

            productsGrid.appendChild(
                createProductCard(
                    product
                )
            );

        }
    );


    lucide.createIcons();

}


/* =========================================================
   TARJETA DE PRODUCTO
========================================================= */

function createProductCard(
    product
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "product-card";


    const isFavorite =
        favorites.includes(
            Number(product.id)
        );


    const category =
        normalizeCategory(
            product.category
        );


    card.innerHTML = `

        <div class="product-image">

            <img
                src="${getImageSrc(product.image)}"
                alt="${product.name}"
                loading="lazy"
            >

            <span class="product-tag">
                ${category}
            </span>

            <button
                type="button"
                class="favorite ${isFavorite ? "active" : ""}"
                data-favorite="${product.id}"
                aria-label="Favorito"
            >

                <i data-lucide="heart"></i>

            </button>

        </div>

        <div class="product-info">

            <h3>
                ${product.name}
            </h3>

            <p>
                ${product.description}
            </p>

            <strong class="product-price">
                ${formatPrice(product.price)}
            </strong>

            <span class="product-stock">

                ${
                    product.stock > 0
                        ? `${product.stock} disponibles`
                        : "Sin stock"
                }

            </span>

            <div class="product-actions">

                <button
                    type="button"
                    class="view-button"
                    data-view-product="${product.id}"
                >

                    Ver producto

                </button>

                <button
                    type="button"
                    class="add-button"
                    data-add-product="${product.id}"
                    aria-label="Agregar al carrito"
                    ${product.stock <= 0 ? "disabled" : ""}
                >

                    <i data-lucide="plus"></i>

                </button>

            </div>

        </div>

    `;


    return card;

}


/* =========================================================
   EVENTOS DE PRODUCTOS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const viewButton =
            event.target.closest(
                "[data-view-product]"
            );


        if (viewButton) {

            openProductModal(
                Number(
                    viewButton.dataset.viewProduct
                )
            );


            return;

        }


        const addButton =
            event.target.closest(
                "[data-add-product]"
            );


        if (addButton) {

            addSimpleProduct(
                Number(
                    addButton.dataset.addProduct
                )
            );


            return;

        }


        const favoriteButton =
            event.target.closest(
                "[data-favorite]"
            );


        if (favoriteButton) {

            toggleFavorite(
                Number(
                    favoriteButton.dataset.favorite
                )
            );

        }

    }
);


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(
    productId
) {

    if (
        favorites.includes(
            productId
        )
    ) {

        favorites =
            favorites.filter(
                function (id) {

                    return id !==
                        productId;

                }
            );


        showToast(
            "Eliminado de favoritos"
        );

    } else {

        favorites.push(
            productId
        );


        showToast(
            "Agregado a favoritos ❤️"
        );

    }


    saveFavorites();

    renderProducts();

}


/* =========================================================
   MODAL PRODUCTO
========================================================= */

function openProductModal(
    productId
) {

    const product =
        products.find(
            function (item) {

                return Number(item.id) ===
                    Number(productId);

            }
        );


    if (!product) {

        return;

    }


    currentProduct =
        product;


    modalQuantity =
        1;


    selectedSize =
        product.sizes &&
        product.sizes.length
            ? product.sizes[0]
            : null;


    selectedColor =
        product.colors &&
        product.colors.length
            ? product.colors[0]
            : null;


    productModalContent.innerHTML = `

        <div class="modal-image">

            <img
                src="${getImageSrc(product.image)}"
                alt="${product.name}"
            >

        </div>

        <div class="modal-info">

            <span class="section-label">

                ${normalizeCategory(
                    product.category
                )}

            </span>

            <h2>
                ${product.name}
            </h2>

            <p class="modal-description">
                ${product.description}
            </p>

            <div class="modal-price">
                ${formatPrice(product.price)}
            </div>

            ${
                product.sizes &&
                product.sizes.length
                    ? `

                        <p class="option-title">
                            Talle
                        </p>

                        <div class="option-list">

                            ${product.sizes.map(
                                function (
                                    size,
                                    index
                                ) {

                                    return `
                                        <button
                                            type="button"
                                            class="option ${index === 0 ? "active" : ""}"
                                            data-size="${size}"
                                        >
                                            ${size}
                                        </button>
                                    `;

                                }
                            ).join("")}

                        </div>

                    `
                    : ""
            }

            ${
                product.colors &&
                product.colors.length
                    ? `

                        <p class="option-title">
                            Color
                        </p>

                        <div class="option-list">

                            ${product.colors.map(
                                function (
                                    color,
                                    index
                                ) {

                                    return `
                                        <button
                                            type="button"
                                            class="option ${index === 0 ? "active" : ""}"
                                            data-color="${color}"
                                        >
                                            ${color}
                                        </button>
                                    `;

                                }
                            ).join("")}

                        </div>

                    `
                    : ""
            }

            <p class="option-title">
                Cantidad
            </p>

            <div class="quantity">

                <button
                    type="button"
                    id="quantity-minus"
                >
                    −
                </button>

                <span
                    id="modal-quantity"
                >
                    1
                </span>

                <button
                    type="button"
                    id="quantity-plus"
                >
                    +
                </button>

            </div>

            <button
                id="modal-add-cart"
                type="button"
                class="primary-button full"
                ${product.stock <= 0 ? "disabled" : ""}
            >

                <i data-lucide="shopping-bag"></i>

                ${
                    product.stock > 0
                        ? "Agregar al carrito"
                        : "Sin stock"
                }

            </button>

        </div>

    `;


    productModal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";


    lucide.createIcons();


    document
        .querySelectorAll(
            "[data-size]"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        selectedSize =
                            button.dataset.size;


                        document
                            .querySelectorAll(
                                "[data-size]"
                            )
                            .forEach(
                                function (
                                    item
                                ) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        button.classList.add(
                            "active"
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-color]"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        selectedColor =
                            button.dataset.color;


                        document
                            .querySelectorAll(
                                "[data-color]"
                            )
                            .forEach(
                                function (
                                    item
                                ) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        button.classList.add(
                            "active"
                        );

                    }
                );

            }
        );


    document
        .getElementById(
            "quantity-minus"
        )
        .addEventListener(
            "click",
            function () {

                if (
                    modalQuantity > 1
                ) {

                    modalQuantity--;

                    updateModalQuantity();

                }

            }
        );


    document
        .getElementById(
            "quantity-plus"
        )
        .addEventListener(
            "click",
            function () {

                if (
                    modalQuantity <
                    product.stock
                ) {

                    modalQuantity++;

                    updateModalQuantity();

                }

            }
        );


    document
        .getElementById(
            "modal-add-cart"
        )
        .addEventListener(
            "click",
            function () {

                if (
                    product.stock <= 0
                ) {

                    return;

                }


                addProductToCart(
                    product,
                    modalQuantity,
                    selectedSize,
                    selectedColor
                );


                closeProductModal();

            }
        );

}


function updateModalQuantity() {

    const element =
        document.getElementById(
            "modal-quantity"
        );


    if (element) {

        element.textContent =
            modalQuantity;

    }

}


function closeProductModal() {

    productModal.classList.add(
        "hidden"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   CERRAR MODAL
========================================================= */

document
    .getElementById(
        "modal-close"
    )
    .addEventListener(
        "click",
        closeProductModal
    );


productModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            productModal
        ) {

            closeProductModal();

        }

    }
);


/* =========================================================
   CARRITO
========================================================= */

function addSimpleProduct(
    productId
) {

    const product =
        products.find(
            function (item) {

                return Number(item.id) ===
                    Number(productId);

            }
        );


    if (!product) {

        return;

    }


    if (
        product.stock <= 0
    ) {

        showToast(
            "Este producto está sin stock"
        );


        return;

    }


    addProductToCart(
        product,
        1,
        product.sizes?.[0] || null,
        product.colors?.[0] || null
    );

}


function addProductToCart(
    product,
    quantity,
    size,
    color
) {

    const existing =
        cart.find(
            function (item) {

                return (
                    Number(item.id) ===
                        Number(product.id) &&
                    item.size ===
                        size &&
                    item.color ===
                        color
                );

            }
        );


    if (existing) {

        const newQuantity =
            existing.quantity +
            quantity;


        if (
            newQuantity >
            product.stock
        ) {

            showToast(
                "No hay suficiente stock"
            );


            return;

        }


        existing.quantity =
            newQuantity;

    } else {

        cart.push({

            id:
                Number(product.id),

            quantity:
                quantity,

            size:
                size,

            color:
                color

        });

    }


    saveCart();

    renderCart();


    showToast(
        "Producto agregado al carrito 🛍️"
    );

}


/* =========================================================
   RENDER CARRITO
========================================================= */

function renderCart() {

    if (!cartItems) {

        return;

    }


    cartItems.innerHTML =
        "";


    if (
        cart.length ===
        0
    ) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i data-lucide="shopping-bag"></i>

                <p>
                    Tu carrito está vacío.
                </p>

            </div>

        `;


        cartCount.textContent =
            "0";


        cartTotal.textContent =
            "$0";


        lucide.createIcons();


        return;

    }


    let total =
        0;


    let totalQuantity =
        0;


    cart.forEach(
        function (
            cartItem,
            index
        ) {

            const product =
                products.find(
                    function (item) {

                        return Number(item.id) ===
                            Number(cartItem.id);

                    }
                );


            if (!product) {

                return;

            }


            const subtotal =
                product.price *
                cartItem.quantity;


            total +=
                subtotal;


            totalQuantity +=
                cartItem.quantity;


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "cart-item";


            item.innerHTML = `

                <img
                    src="${getImageSrc(product.image)}"
                    alt="${product.name}"
                >

                <div>

                    <h4>
                        ${product.name}
                    </h4>

                    <small>
                        ${formatPrice(product.price)}
                    </small>

                    ${
                        cartItem.size
                            ? `
                                <small>
                                    Talle:
                                    ${cartItem.size}
                                </small>
                            `
                            : ""
                    }

                    ${
                        cartItem.color
                            ? `
                                <small>
                                    Color:
                                    ${cartItem.color}
                                </small>
                            `
                            : ""
                    }

                    <div class="cart-controls">

                        <button
                            type="button"
                            data-minus-cart="${index}"
                        >
                            −
                        </button>

                        <strong>
                            ${cartItem.quantity}
                        </strong>

                        <button
                            type="button"
                            data-plus-cart="${index}"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    type="button"
                    class="icon-button"
                    data-remove-cart="${index}"
                    aria-label="Eliminar"
                >

                    <i data-lucide="trash-2"></i>

                </button>

            `;


            cartItems.appendChild(
                item
            );

        }
    );


    cartCount.textContent =
        totalQuantity;


    cartTotal.textContent =
        formatPrice(
            total
        );


    lucide.createIcons();

}


/* =========================================================
   CONTROLES CARRITO
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const minus =
            event.target.closest(
                "[data-minus-cart]"
            );


        if (minus) {

            const index =
                Number(
                    minus.dataset.minusCart
                );


            if (
                cart[index] &&
                cart[index].quantity >
                    1
            ) {

                cart[index].quantity--;

            } else {

                cart.splice(
                    index,
                    1
                );

            }


            saveCart();

            renderCart();


            return;

        }


        const plus =
            event.target.closest(
                "[data-plus-cart]"
            );


        if (plus) {

            const index =
                Number(
                    plus.dataset.plusCart
                );


            const cartItem =
                cart[index];


            if (!cartItem) {

                return;

            }


            const product =
                products.find(
                    function (item) {

                        return Number(item.id) ===
                            Number(cartItem.id);

                    }
                );


            if (
                product &&
                cartItem.quantity <
                    product.stock
            ) {

                cartItem.quantity++;

                saveCart();

                renderCart();

            } else {

                showToast(
                    "No hay más stock disponible"
                );

            }


            return;

        }


        const remove =
            event.target.closest(
                "[data-remove-cart]"
            );


        if (remove) {

            const index =
                Number(
                    remove.dataset.removeCart
                );


            cart.splice(
                index,
                1
            );


            saveCart();

            renderCart();

        }

    }
);


/* =========================================================
   ABRIR / CERRAR CARRITO
========================================================= */

function openCart() {

    cartPanel.classList.add(
        "open"
    );


    cartOverlay.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


function closeCart() {

    cartPanel.classList.remove(
        "open"
    );


    cartOverlay.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


document
    .getElementById(
        "cart-btn"
    )
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById(
        "cart-close"
    )
    .addEventListener(
        "click",
        closeCart
    );


cartOverlay.addEventListener(
    "click",
    closeCart
);


/* =========================================================
   CHECKOUT WHATSAPP
========================================================= */

document
    .getElementById(
        "checkout-btn"
    )
    .addEventListener(
        "click",
        function () {

            if (
                cart.length ===
                0
            ) {

                showToast(
                    "Tu carrito está vacío"
                );


                return;

            }


            let message =
                "Hola! Quiero hacer un pedido:\n\n";


            let total =
                0;


            cart.forEach(
                function (
                    cartItem
                ) {

                    const product =
                        products.find(
                            function (item) {

                                return Number(item.id) ===
                                    Number(cartItem.id);

                            }
                        );


                    if (!product) {

                        return;

                    }


                    const subtotal =
                        product.price *
                        cartItem.quantity;


                    total +=
                        subtotal;


                    message +=
                        `• ${product.name}`;


                    message +=
                        ` x${cartItem.quantity}`;


                    if (
                        cartItem.size
                    ) {

                        message +=
                            ` | Talle: ${cartItem.size}`;

                    }


                    if (
                        cartItem.color
                    ) {

                        message +=
                            ` | Color: ${cartItem.color}`;

                    }


                    message +=
                        ` | ${formatPrice(subtotal)}\n`;

                }
            );


            message +=
                `\nTotal: ${formatPrice(total)}`;


            const phone =
                "+5493512289323";


            const url =
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


            window.open(
                url,
                "_blank"
            );

        }
    );


/* =========================================================
   FILTROS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const filter =
            event.target.closest(
                ".filter"
            );


        if (!filter) {

            return;

        }


        currentFilter =
            filter.dataset.filter;


        document
            .querySelectorAll(
                ".filter"
            )
            .forEach(
                function (button) {

                    button.classList.toggle(
                        "active",
                        button === filter
                    );

                }
            );


        renderProducts();

    }
);


/* =========================================================
   CATEGORÍAS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest(
                ".category-prev"
            ) ||
            event.target.closest(
                ".category-next"
            )
        ) {

            return;

        }


        const category =
            event.target.closest(
                ".category-card"
            );


        if (!category) {

            return;

        }


        currentFilter =
            category.dataset.category;


        document
            .querySelectorAll(
                ".filter"
            )
            .forEach(
                function (button) {

                    button.classList.toggle(
                        "active",
                        button.dataset.filter ===
                            currentFilter
                    );

                }
            );


        renderProducts();


        document
            .getElementById(
                "productos"
            )
            .scrollIntoView({
                behavior:
                    "smooth"
            });

    }
);


/* =========================================================
   BUSCADOR
========================================================= */

document
    .getElementById(
        "search-btn"
    )
    .addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "search-panel"
                )
                .classList.add(
                    "open"
                );


            setTimeout(
                function () {

                    document
                        .getElementById(
                            "search-input"
                        )
                        .focus();

                },
                150
            );

        }
    );


document
    .getElementById(
        "search-close"
    )
    .addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "search-panel"
                )
                .classList.remove(
                    "open"
                );

        }
    );


document
    .getElementById(
        "search-input"
    )
    .addEventListener(
        "input",
        function (event) {

            searchTerm =
                event.target.value
                    .toLowerCase()
                    .trim();


            renderProducts();

        }
    );


/* =========================================================
   DARK MODE
========================================================= */

const themeBtn =
    document.getElementById(
        "theme-btn"
    );


const savedTheme =
    localStorage.getItem(
        "theme"
    );


if (
    savedTheme ===
    "dark"
) {

    document.body.classList.add(
        "dark"
    );


    themeBtn.innerHTML =
        '<i data-lucide="sun"></i>';

}


themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "theme",
            isDark
                ? "dark"
                : "light"
        );


        themeBtn.innerHTML =
            isDark
                ? '<i data-lucide="sun"></i>'
                : '<i data-lucide="moon"></i>';


        lucide.createIcons();

    }
);


/* =========================================================
   MENÚ MÓVIL
========================================================= */

const mobileMenu =
    document.getElementById(
        "mobile-menu"
    );


document
    .getElementById(
        "menu-btn"
    )
    .addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle(
                "open"
            );

        }
    );


mobileMenu
    .querySelectorAll("a")
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }
            );

        }
    );


/* =========================================================
   ADMINISTRACIÓN
========================================================= */

const adminLoginButton =
    document.getElementById(
        "admin-login-btn"
    );


if (adminLoginButton) {

    adminLoginButton.addEventListener(
        "click",
        function () {

            const password =
                document
                    .getElementById(
                        "admin-password"
                    )
                    .value;


            if (
                password ===
                "1234"
            ) {

                document
                    .getElementById(
                        "admin-panel"
                    )
                    .classList.remove(
                        "hidden"
                    );


                renderAdminProducts();


                showToast(
                    "Acceso correcto"
                );

            } else {

                showToast(
                    "Contraseña incorrecta"
                );

            }

        }
    );

}


/* =========================================================
   FORMULARIO ADMIN
========================================================= */

const productForm =
    document.getElementById(
        "product-form"
    );


if (productForm) {

    productForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "admin-name"
                    )
                    .value
                    .trim();


            const category =
                document
                    .getElementById(
                        "admin-category"
                    )
                    .value;


            const price =
                Number(
                    document
                        .getElementById(
                            "admin-price"
                        )
                        .value
                );


            const stock =
                Number(
                    document
                        .getElementById(
                            "admin-stock"
                        )
                        .value
                );


            const image =
                document
                    .getElementById(
                        "admin-image"
                    )
                    .value
                    .trim();


            const sizesText =
                document
                    .getElementById(
                        "admin-sizes"
                    )
                    .value
                    .trim();


            const colorsText =
                document
                    .getElementById(
                        "admin-colors"
                    )
                    .value
                    .trim();


            const description =
                document
                    .getElementById(
                        "admin-description"
                    )
                    .value
                    .trim();


            const newProduct = {

                id:
                    Date.now(),

                name:
                    name,

                category:
                    category,

                price:
                    price,

                stock:
                    stock,

                image:
                    image,

                description:
                    description,

                sizes:
                    sizesText
                        ? sizesText
                            .split(",")
                            .map(
                                function (
                                    item
                                ) {

                                    return item.trim();

                                }
                            )
                            .filter(Boolean)
                        : [],

                colors:
                    colorsText
                        ? colorsText
                            .split(",")
                            .map(
                                function (
                                    item
                                ) {

                                    return item.trim();

                                }
                            )
                            .filter(Boolean)
                        : []

            };


            products.push(
                newProduct
            );


            saveProducts();


            renderProducts();

            renderAdminProducts();


            productForm.reset();


            document
                .getElementById(
                    "admin-image"
                )
                .value =
                "imagenes/productos/remera1.jpg";


            showToast(
                "Producto agregado correctamente ✅"
            );

        }
    );

}


/* =========================================================
   LISTA ADMIN
========================================================= */

function renderAdminProducts() {

    const container =
        document.getElementById(
            "admin-products"
        );


    if (!container) {

        return;

    }


    container.innerHTML =
        "";


    products.forEach(
        function (product) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "admin-row";


            item.innerHTML = `

                <div>

                    <strong>
                        ${product.name}
                    </strong>

                    <small>
                        ${normalizeCategory(product.category)}
                        ·
                        ${formatPrice(product.price)}
                    </small>

                </div>

                <button
                    type="button"
                    class="delete-btn"
                    data-delete-product="${product.id}"
                >

                    Eliminar

                </button>

            `;


            container.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   ELIMINAR PRODUCTOS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "[data-delete-product]"
            );


        if (!button) {

            return;

        }


        const productId =
            Number(
                button.dataset.deleteProduct
            );


        const confirmDelete =
            window.confirm(
                "¿Querés eliminar este producto?"
            );


        if (!confirmDelete) {

            return;

        }


        if (
            defaultProductIds.has(
                productId
            )
        ) {

            if (
                !deletedDefaultProductIds.includes(
                    productId
                )
            ) {

                deletedDefaultProductIds.push(
                    productId
                );

            }


            saveDeletedDefaultProducts();

        }


        products =
            products.filter(
                function (product) {

                    return Number(product.id) !==
                        productId;

                }
            );


        favorites =
            favorites.filter(
                function (id) {

                    return Number(id) !==
                        productId;

                }
            );


        cart =
            cart.filter(
                function (item) {

                    return Number(item.id) !==
                        productId;

                }
            );


        saveProducts();

        saveFavorites();

        saveCart();


        renderProducts();

        renderCart();

        renderAdminProducts();


        showToast(
            "Producto eliminado"
        );

    }
);


/* =========================================================
   CARRUSELES DE CATEGORÍAS
========================================================= */

function initCategoryCarousels() {

    const carousels =
        document.querySelectorAll(
            "[data-category-carousel]"
        );


    carousels.forEach(
        function (carousel) {

            const slides =
                carousel.querySelectorAll(
                    ".category-slide"
                );


            const previous =
                carousel.querySelector(
                    ".category-prev"
                );


            const next =
                carousel.querySelector(
                    ".category-next"
                );


            if (
                slides.length <=
                1
            ) {

                return;

            }


            let currentSlide =
                0;


            let timer =
                null;


            function showSlide(
                index
            ) {

                if (
                    index < 0
                ) {

                    index =
                        slides.length - 1;

                }


                if (
                    index >=
                    slides.length
                ) {

                    index =
                        0;

                }


                currentSlide =
                    index;


                slides.forEach(
                    function (
                        slide,
                        slideIndex
                    ) {

                        slide.classList.toggle(
                            "active",
                            slideIndex ===
                                currentSlide
                        );

                    }
                );

            }


            function startAutoPlay() {

                clearInterval(
                    timer
                );


                timer =
                    setInterval(
                        function () {

                            showSlide(
                                currentSlide + 1
                            );

                        },
                        4000
                    );

            }


            function restartAutoPlay() {

                clearInterval(
                    timer
                );


                startAutoPlay();

            }


            if (previous) {

                previous.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();


                        showSlide(
                            currentSlide - 1
                        );


                        restartAutoPlay();

                    }
                );

            }


            if (next) {

                next.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();


                        showSlide(
                            currentSlide + 1
                        );


                        restartAutoPlay();

                    }
                );

            }


            carousel.addEventListener(
                "mouseenter",
                function () {

                    clearInterval(
                        timer
                    );

                }
            );


            carousel.addEventListener(
                "mouseleave",
                function () {

                    startAutoPlay();

                }
            );


            showSlide(
                0
            );


            startAutoPlay();

        }
    );

}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderProducts();

        renderCart();

        renderAdminProducts();

        initCategoryCarousels();

        lucide.createIcons();

    }
);