function displayCart() {
    let cart = getCart();

    let cartItems = document.getElementById("cartItems");
    let itemsTotal = document.getElementById("itemsTotal");
    let delivery = document.getElementById("delivery");
    let grandTotal = document.getElementById("grandTotal");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your Cart is Empty</h2>
                <p>Add your favourite books to your cart.</p>
                <a href="home.html">Browse Books</a>
            </div>
        `;

        itemsTotal.textContent = "₹0";
        delivery.textContent = "₹0";
        grandTotal.textContent = "₹0";
        return;
    }

    cart.forEach((book, index) => {
        let subtotal = book.price * book.quantity;
        total += subtotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-cover ${book.cover}">
                    ${book.title}
                </div>

                <div class="cart-book-info">
                    <h3>${book.title}</h3>
                    <p>By ${book.author}</p>
                    <p>Category: ${book.category}</p>
                    <p>Price: ₹${book.price}</p>

                    <div class="quantity">
                        <button onclick="changeQuantity(${index}, -1)">−</button>
                        <span>${book.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>

                    <strong>Subtotal: ₹${subtotal}</strong>
                    <br>

                    <button class="remove-btn"
                        onclick="removeBook(${index})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    });

    let deliveryCharge = total > 0 ? 40 : 0;

    itemsTotal.textContent = "₹" + total;
    delivery.textContent = "₹" + deliveryCharge;
    grandTotal.textContent = "₹" + (total + deliveryCharge);
}

function changeQuantity(index, amount) {
    let cart = getCart();

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);
    displayCart();
}

function removeBook(index) {
    let cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);
    displayCart();
}

function checkout() {
    let cart = getCart();

    if (cart.length === 0) {
    
        return;
    }

    window.location.href = "corder.html";
}




function displayCart() {
    let cart = getCart();

    let cartItems = document.getElementById("cartItems");
    let itemsTotal = document.getElementById("itemsTotal");
    let delivery = document.getElementById("delivery");
    let grandTotal = document.getElementById("grandTotal");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your Cart is Empty</h2>
                <p>Add your favourite books to your cart.</p>
                <a href="home.html">Browse Books</a>
            </div>
        `;

        itemsTotal.textContent = "₹0";
        delivery.textContent = "₹0";
        grandTotal.textContent = "₹0";
        return;
    }

    cart.forEach((book, index) => {
        let subtotal = book.price * book.quantity;
        total += subtotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-cover ${book.cover}">
                    ${book.title}
                </div>

                <div class="cart-book-info">
                    <h3>${book.title}</h3>
                    <p>By ${book.author}</p>
                    <p>Category: ${book.category}</p>
                    <p>Price: ₹${book.price}</p>

                    <div class="quantity">
                        <button onclick="changeQuantity(${index}, -1)">−</button>
                        <span>${book.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>

                    <strong>Subtotal: ₹${subtotal}</strong>
                    <br>

                    <button class="remove-btn"
                        onclick="removeBook(${index})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    });

    let deliveryCharge = total > 0 ? 40 : 0;

    itemsTotal.textContent = "₹" + total;
    delivery.textContent = "₹" + deliveryCharge;
    grandTotal.textContent = "₹" + (total + deliveryCharge);
}

function changeQuantity(index, amount) {
    let cart = getCart();

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);
    displayCart();
}

function removeBook(index) {
    let cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);
    displayCart();
}

function checkout() {
    let cart = getCart();

    if (cart.length === 0) {
    
        return;
    }

    window.location.href = "corder.html";
}

displayCart();

