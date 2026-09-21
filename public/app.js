/* =========================================================
   ESTADO
========================================================= */

let products = [];

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

let currentFilter =
    "Todos";

let searchTerm =
    "";

let currentProduct =
    null;

let selectedSize =
    null;

let selectedColor =
    null;

let modalQuantity =
    1;

let adminPassword =
    "";


/* =========================================================
   HELPERS
========================================================= */

function formatPrice(value) {

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


function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


function saveFavorites() {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}


let toastTimer;


function toast(message) {

    const element =
        document.getElementById(
            "toast"
        );


    element.textContent =
        message;


    element.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function () {

                element.classList.remove(
                    "show"
                );

            },
            2300
        );

}


/* =========================================================
   CARGAR PRODUCTOS
========================================================= */

async function loadProducts() {

    try {

        const response =
            await fetch(
                "/api/products"
            );


        if (!response.ok) {

            throw new Error(
                "No se pudieron cargar los productos."
            );

        }


        products =
            await response.json();


        renderProducts();

        renderCart();

        updateStats();

    } catch (error) {

        console.error(
            error
        );

        toast(
            "No se pudieron cargar los productos."
        );

    }

}


/* =========================================================
   PRODUCTOS
========================================================= */

function renderProducts() {

    const grid =
        document.getElementById(
            "products-grid"
        );


    const empty =
        document.getElementById(
            "no-products"
        );


    grid.innerHTML =
        "";


    const filtered =
        products.filter(
            function (product) {

                const categoryMatch =
                    currentFilter ===
                    "Todos" ||
                    product.category ===
                    currentFilter;


                const searchable =
                    (
                        product.name +
                        " " +
                        product.category +
                        " " +
                        product.description
                    ).toLowerCase();


                const searchMatch =
                    !searchTerm ||
                    searchable.includes(
                        searchTerm
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    if (
        filtered.length ===
        0
    ) {

        empty.style.display =
            "block";

    } else {

        empty.style.display =
            "none";

    }


    filtered.forEach(
        function (product) {

            grid.appendChild(
                createProductCard(
                    product
                )
            );

        }
    );


    document
        .getElementById(
            "product-result"
        )
        .textContent =
        `${filtered.length} producto${filtered.length !== 1 ? "s" : ""}`;


    lucide.createIcons();

}


function createProductCard(
    product
) {

    const card =
        document.createElement(
            "article"
        );


    const favorite =
        favorites.includes(
            product.id
        );


    card.className =
        "product-card";


    card.innerHTML = `

        <div class="product-image">

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <span class="product-tag">
                ${product.category}
            </span>


            <button
                type="button"
                class="favorite ${favorite ? "active" : ""}"
                data-favorite="${product.id}"
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
                    data-view="${product.id}"
                >
                    Ver producto
                </button>


                <button
                    type="button"
                    class="add-button"
                    data-add="${product.id}"
                    ${
                        product.stock <= 0
                            ? "disabled"
                            : ""
                    }
                >
                    <i data-lucide="plus"></i>
                </button>

            </div>

        </div>

    `;


    return card;

}


/* =========================================================
   CLICK GENERAL
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const view =
            event.target.closest(
                "[data-view]"
            );


        if (view) {

            openProduct(
                Number(
                    view.dataset.view
                )
            );

            return;

        }


        const add =
            event.target.closest(
                "[data-add]"
            );


        if (add) {

            addSimple(
                Number(
                    add.dataset.add
                )
            );

            return;

        }


        const favorite =
            event.target.closest(
                "[data-favorite]"
            );


        if (favorite) {

            toggleFavorite(
                Number(
                    favorite.dataset.favorite
                )
            );

        }

    }
);


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(
    id
) {

    if (
        favorites.includes(
            id
        )
    ) {

        favorites =
            favorites.filter(
                function (item) {

                    return item !== id;

                }
            );

        toast(
            "Eliminado de favoritos."
        );

    } else {

        favorites.push(
            id
        );

        toast(
            "Agregado a favoritos ❤️"
        );

    }


    saveFavorites();

    renderProducts();

}


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
   SEARCH
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

            document
                .getElementById(
                    "search-input"
                )
                .focus();

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

}


document
    .getElementById(
        "theme-btn"
    )
    .addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );


            localStorage.setItem(
                "theme",
                document.body.classList.contains(
                    "dark"
                )
                    ? "dark"
                    : "light"
            );

        }
    );


/* =========================================================
   MOBILE MENU
========================================================= */

document
    .getElementById(
        "menu-btn"
    )
    .addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "mobile-menu"
                )
                .classList.toggle(
                    "open"
                );

        }
    );


/* =========================================================
   MODAL PRODUCTO
========================================================= */

function openProduct(
    productId
) {

    const product =
        products.find(
            function (item) {

                return item.id ===
                    productId;

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
        product.sizes.length
            ? product.sizes[0]
            : null;

    selectedColor =
        product.colors.length
            ? product.colors[0]
            : null;


    const content =
        document.getElementById(
            "modal-content"
        );


    content.innerHTML = `

        <div class="modal-image">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

        </div>


        <div class="modal-info">

            <span class="section-label">
                ${product.category}
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
                product.sizes.length
                    ? `
                        <div>

                            <p class="option-title">
                                Talle
                            </p>

                            <div class="option-list">

                                ${product.sizes.map(
                                    function (size, index) {

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

                        </div>
                    `
                    : ""
            }


            ${
                product.colors.length
                    ? `
                        <div>

                            <p class="option-title">
                                Color
                            </p>

                            <div class="option-list">

                                ${product.colors.map(
                                    function (color, index) {

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

                <span id="quantity-value">
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
                type="button"
                id="modal-add"
                class="primary-button full"
                ${
                    product.stock <= 0
                        ? "disabled"
                        : ""
                }
            >
                Agregar al carrito
            </button>

        </div>

    `;


    document
        .getElementById(
            "product-modal"
        )
        .classList.remove(
            "hidden"
        );


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
                                function (item) {

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
                                function (item) {

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

                    updateQuantity();

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

                    updateQuantity();

                }

            }
        );


    document
        .getElementById(
            "modal-add"
        )
        .addEventListener(
            "click",
            function () {

                addToCart(
                    product,
                    modalQuantity,
                    selectedSize,
                    selectedColor
                );


                closeProductModal();

            }
        );

}


function updateQuantity() {

    document
        .getElementById(
            "quantity-value"
        )
        .textContent =
        modalQuantity;

}


function closeProductModal() {

    document
        .getElementById(
            "product-modal"
        )
        .classList.add(
            "hidden"
        );

}


document
    .getElementById(
        "modal-close"
    )
    .addEventListener(
        "click",
        closeProductModal
    );


/* =========================================================
   CART
========================================================= */

function addSimple(
    productId
) {

    const product =
        products.find(
            function (item) {

                return item.id ===
                    productId;

            }
        );


    if (!product) {
        return;
    }


    if (
        product.stock <=
        0
    ) {

        toast(
            "Producto sin stock."
        );

        return;
    }


    addToCart(
        product,
        1,
        product.sizes[0] || null,
        product.colors[0] || null
    );

}


function addToCart(
    product,
    quantity,
    size,
    color
) {

    const existing =
        cart.find(
            function (item) {

                return (
                    item.productId === product.id &&
                    item.size === size &&
                    item.color === color
                );

            }
        );


    if (existing) {

        const total =
            existing.quantity +
            quantity;


        if (
            total >
            product.stock
        ) {

            toast(
                "No hay suficiente stock."
            );

            return;
        }


        existing.quantity =
            total;

    } else {

        cart.push({

            productId:
                product.id,

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

    toast(
        "Producto agregado 🛍️"
    );

}


/* =========================================================
   CART RENDER
========================================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cart-items"
        );


    container.innerHTML =
        "";


    let total =
        0;

    let count =
        0;


    if (
        cart.length ===
        0
    ) {

        container.innerHTML = `

            <div
                style="
                    padding:60px 20px;
                    text-align:center;
                    color:var(--muted);
                "
            >

                Tu carrito está vacío.

            </div>

        `;

    }


    cart.forEach(
        function (item, index) {

            const product =
                products.find(
                    function (product) {

                        return product.id ===
                            item.productId;

                    }
                );


            if (!product) {
                return;
            }


            const subtotal =
                product.price *
                item.quantity;


            total +=
                subtotal;


            count +=
                item.quantity;


            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "cart-item";


            element.innerHTML = `

                <img
                    src="${product.image}"
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
                        item.size
                            ? `
                                <small>
                                    Talle: ${item.size}
                                </small>
                            `
                            : ""
                    }

                    ${
                        item.color
                            ? `
                                <small>
                                    Color: ${item.color}
                                </small>
                            `
                            : ""
                    }


                    <div class="cart-controls">

                        <button
                            data-cart-minus="${index}"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            data-cart-plus="${index}"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="icon-button"
                    data-cart-remove="${index}"
                >

                    <i data-lucide="trash-2"></i>

                </button>

            `;


            container.appendChild(
                element
            );

        }
    );


    document
        .getElementById(
            "cart-count"
        )
        .textContent =
        count;


    document
        .getElementById(
            "cart-total"
        )
        .textContent =
        formatPrice(
            total
        );


    lucide.createIcons();

}


document.addEventListener(
    "click",
    function (event) {

        const minus =
            event.target.closest(
                "[data-cart-minus]"
            );


        if (minus) {

            const index =
                Number(
                    minus.dataset.cartMinus
                );


            if (
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
                "[data-cart-plus]"
            );


        if (plus) {

            const index =
                Number(
                    plus.dataset.cartPlus
                );


            const item =
                cart[index];


            const product =
                products.find(
                    function (product) {

                        return product.id ===
                            item.productId;

                    }
                );


            if (
                product &&
                item.quantity <
                product.stock
            ) {

                item.quantity++;

                saveCart();

                renderCart();

            } else {

                toast(
                    "No hay más stock."
                );

            }

            return;
        }


        const remove =
            event.target.closest(
                "[data-cart-remove]"
            );


        if (remove) {

            const index =
                Number(
                    remove.dataset.cartRemove
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
   CART OPEN/CLOSE
========================================================= */

function openCart() {

    document
        .getElementById(
            "cart-panel"
        )
        .classList.add(
            "open"
        );


    document
        .getElementById(
            "cart-overlay"
        )
        .classList.add(
            "open"
        );

}


function closeCart() {

    document
        .getElementById(
            "cart-panel"
        )
        .classList.remove(
            "open"
        );


    document
        .getElementById(
            "cart-overlay"
        )
        .classList.remove(
            "open"
        );

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


document
    .getElementById(
        "cart-overlay"
    )
    .addEventListener(
        "click",
        closeCart
    );


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

    if (
        cart.length ===
        0
    ) {

        toast(
            "Tu carrito está vacío."
        );

        return;
    }


    let total =
        0;


    const lines =
        cart.map(
            function (item) {

                const product =
                    products.find(
                        function (product) {

                            return product.id ===
                                item.productId;

                        }
                    );


                if (!product) {
                    return "";
                }


                const subtotal =
                    product.price *
                    item.quantity;


                total +=
                    subtotal;


                return `
                    <div>
                        ${product.name}
                        x${item.quantity}
                        —
                        ${formatPrice(subtotal)}
                    </div>
                `;

            }
        ).join("");


    document
        .getElementById(
            "checkout-summary"
        )
        .innerHTML = `

            ${lines}

            <hr>

            <strong>
                Total:
                ${formatPrice(total)}
            </strong>

        `;


    document
        .getElementById(
            "checkout-modal"
        )
        .classList.remove(
            "hidden"
        );

}


document
    .getElementById(
        "checkout-btn"
    )
    .addEventListener(
        "click",
        openCheckout
    );


document
    .getElementById(
        "checkout-close"
    )
    .addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "checkout-modal"
                )
                .classList.add(
                    "hidden"
                );

        }
    );


/* =========================================================
   CHECKOUT -> MERCADO PAGO
========================================================= */

document
    .getElementById(
        "checkout-form"
    )
    .addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const customer = {

                name:
                    document
                        .getElementById(
                            "customer-name"
                        )
                        .value
                        .trim(),

                email:
                    document
                        .getElementById(
                            "customer-email"
                        )
                        .value
                        .trim(),

                phone:
                    document
                        .getElementById(
                            "customer-phone"
                        )
                        .value
                        .trim(),

                address:
                    document
                        .getElementById(
                            "customer-address"
                        )
                        .value
                        .trim(),

                city:
                    document
                        .getElementById(
                            "customer-city"
                        )
                        .value
                        .trim()

            };


            const button =
                event.submitter;


            button.disabled =
                true;


            button.textContent =
                "Preparando pago...";


            try {

                const response =
                    await fetch(
                        "/api/checkout",
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify({

                                    customer,

                                    items:
                                        cart

                                })

                        }
                    );


                const data =
                    await response.json();


                if (
                    !response.ok
                ) {

                    throw new Error(
                        data.error ||
                        "No se pudo crear el pago."
                    );

                }


                /*
                 * Vaciar carrito.
                 */

                cart = [];

                saveCart();

                renderCart();


                /*
                 * Ir a Mercado Pago.
                 */

                window.location.href =
                    data.initPoint;

            } catch (error) {

                console.error(
                    error
                );

                toast(
                    error.message
                );

                button.disabled =
                    false;

                button.textContent =
                    "Continuar al pago";

            }

        }
    );


/* =========================================================
   ADMIN LOGIN
========================================================= */

document
    .getElementById(
        "admin-login-btn"
    )
    .addEventListener(
        "click",
        async function () {

            adminPassword =
                document
                    .getElementById(
                        "admin-password"
                    )
                    .value;


            const response =
                await fetch(
                    "/api/admin/orders",
                    {

                        headers: {

                            "X-Admin-Password":
                                adminPassword

                        }

                    }
                );


            if (
                !response.ok
            ) {

                toast(
                    "Contraseña incorrecta."
                );

                return;
            }


            document
                .getElementById(
                    "admin-panel"
                )
                .classList.remove(
                    "hidden"
                );


            await renderAdmin();

            toast(
                "Panel habilitado."
            );

        }
    );


/* =========================================================
   ADMIN
========================================================= */

async function renderAdmin() {

    await renderAdminProducts();

    await renderAdminOrders();

}


async function renderAdminProducts() {

    const response =
        await fetch(
            "/api/products"
        );


    const data =
        await response.json();


    const container =
        document.getElementById(
            "admin-products"
        );


    container.innerHTML =
        "";


    data.forEach(
        function (product) {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "admin-row";


            row.innerHTML = `

                <div>

                    <strong>
                        ${product.name}
                    </strong>

                    <div>
                        ${product.category}
                        ·
                        ${formatPrice(product.price)}
                        ·
                        Stock: ${product.stock}
                    </div>

                </div>


                <button
                    class="delete-btn"
                    data-delete-product="${product.id}"
                >
                    Eliminar
                </button>

            `;


            container.appendChild(
                row
            );

        }
    );

}


async function renderAdminOrders() {

    const response =
        await fetch(
            "/api/admin/orders",
            {

                headers: {

                    "X-Admin-Password":
                        adminPassword

                }

            }
        );


    if (!response.ok) {
        return;
    }


    const orders =
        await response.json();


    const container =
        document.getElementById(
            "admin-orders"
        );


    container.innerHTML =
        "";


    if (
        orders.length ===
        0
    ) {

        container.textContent =
            "No hay pedidos todavía.";

        return;
    }


    orders.forEach(
        function (order) {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "admin-row";


            row.innerHTML = `

                <div>

                    <strong>
                        Pedido #${order.id}
                    </strong>

                    <div>
                        ${order.customer_name}
                    </div>

                    <div>
                        ${order.customer_email}
                    </div>

                    <div>
                        ${formatPrice(order.total)}
                    </div>

                </div>


                <strong>
                    ${order.status}
                </strong>

            `;


            container.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   ELIMINAR PRODUCTO ADMIN
========================================================= */

document.addEventListener(
    "click",
    async function (event) {

        const button =
            event.target.closest(
                "[data-delete-product]"
            );


        if (!button) {
            return;
        }


        if (
            !adminPassword
        ) {

            return;

        }


        const id =
            Number(
                button.dataset.deleteProduct
            );


        const confirmDelete =
            confirm(
                "¿Querés eliminar este producto?"
            );


        if (!confirmDelete) {
            return;
        }


        await fetch(
            `/api/products/${id}`,
            {

                method:
                    "DELETE",

                headers: {

                    "X-Admin-Password":
                        adminPassword

                }

            }
        );


        await loadProducts();

        await renderAdminProducts();

        toast(
            "Producto eliminado."
        );

    }
);


/* =========================================================
   CREAR PRODUCTO ADMIN
========================================================= */

document
    .getElementById(
        "product-form"
    )
    .addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            if (
                !adminPassword
            ) {

                toast(
                    "Iniciá sesión como administrador."
                );

                return;
            }


            const sizes =
                document
                    .getElementById(
                        "admin-sizes"
                    )
                    .value
                    .split(",")
                    .map(
                        function (value) {
                            return value.trim();
                        }
                    )
                    .filter(Boolean);


            const colors =
                document
                    .getElementById(
                        "admin-colors"
                    )
                    .value
                    .split(",")
                    .map(
                        function (value) {
                            return value.trim();
                        }
                    )
                    .filter(Boolean);


            const product = {

                name:
                    document
                        .getElementById(
                            "admin-name"
                        )
                        .value
                        .trim(),

                category:
                    document
                        .getElementById(
                            "admin-category"
                        )
                        .value,

                price:
                    Number(
                        document
                            .getElementById(
                                "admin-price"
                            )
                            .value
                    ),

                stock:
                    Number(
                        document
                            .getElementById(
                                "admin-stock"
                            )
                            .value
                    ),

                image:
                    document
                        .getElementById(
                            "admin-image"
                        )
                        .value
                        .trim(),

                description:
                    document
                        .getElementById(
                            "admin-description"
                        )
                        .value
                        .trim(),

                sizes,

                colors

            };


            const response =
                await fetch(
                    "/api/products",
                    {

                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/json",

                            "X-Admin-Password":
                                adminPassword

                        },

                        body:
                            JSON.stringify(
                                product
                            )

                    }
                );


            const data =
                await response.json();


            if (
                !response.ok
            ) {

                toast(
                    data.error ||
                    "No se pudo agregar."
                );

                return;
            }


            event.target.reset();


            document
                .getElementById(
                    "admin-image"
                )
                .value =
                "imagenes/foto1.jpg";


            await loadProducts();

            await renderAdminProducts();

            toast(
                "Producto agregado ✅"
            );

        }
    );


/* =========================================================
   ACTUALIZAR ESTADÍSTICAS
========================================================= */

function updateStats() {

    const element =
        document.getElementById(
            "product-result"
        );


    if (
        element
    ) {

        element.textContent =
            `${products.length} productos`;

    }

}


/* =========================================================
   ESTADO DE PAGO
========================================================= */

function checkPaymentStatus() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const payment =
        params.get(
            "payment"
        );


    const orderId =
        params.get(
            "order"
        );


    if (!payment) {
        return;
    }


    if (
        payment ===
        "success"
    ) {

        toast(
            `Pago recibido. Pedido #${orderId}`
        );

    }


    if (
        payment ===
        "pending"
    ) {

        toast(
            `El pago del pedido #${orderId} está pendiente.`
        );

    }


    if (
        payment ===
        "failure"
    ) {

        toast(
            `El pago del pedido #${orderId} no fue aprobado.`
        );

    }


    window.history.replaceState(
        {},
        document.title,
        "/"
    );

}


/* =========================================================
   ICONOS
========================================================= */

lucide.createIcons();


/* =========================================================
   INICIALIZAR
========================================================= */

loadProducts();

renderCart();

checkPaymentStatus();