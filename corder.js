let cart = getCart();

let orderBooks = document.getElementById("orderBooks");
let subtotalElement = document.getElementById("subtotal");
let deliveryElement = document.getElementById("delivery");
let totalElement = document.getElementById("total");

let subtotal = 0;

function displayOrderBooks() {
    orderBooks.innerHTML = "";

    if (cart.length === 0) {
        orderBooks.innerHTML = `
            <p>Your cart is empty.</p>
            <a href="home.html">Browse Books</a>
        `;

        document.getElementById("placeOrderBtn").disabled = true;
        return;
    }

    cart.forEach(book => {
        let bookTotal = book.price * book.quantity;
        subtotal += bookTotal;

        orderBooks.innerHTML += `
            <div class="order-book">

                <div class="book-cover ${book.cover}">
                    ${book.title}
                </div>

                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>By ${book.author}</p>
                    <p>Quantity: ${book.quantity}</p>
                    <strong>₹${bookTotal}</strong>
                </div>

            </div>
        `;
    });

    let deliveryCharge = subtotal > 0 ? 40 : 0;

    subtotalElement.textContent = "₹" + subtotal;
    deliveryElement.textContent = "₹" + deliveryCharge;
    totalElement.textContent = "₹" + (subtotal + deliveryCharge);
}

displayOrderBooks();

/* Show UPI ID only when UPI is selected */

let paymentOptions = document.querySelectorAll(
    'input[name="payment"]'
);

paymentOptions.forEach(option => {
    option.addEventListener("change", function () {
        let upiBox = document.getElementById("upiBox");
        let upiId = document.getElementById("upiId");

        if (this.value === "UPI") {
            upiBox.style.display = "block";
            upiId.required = true;
        } else {
            upiBox.style.display = "none";
            upiId.required = false;
            upiId.value = "";
        }
    });
});

/* Place order */

document.getElementById("orderForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        if (cart.length === 0) {
            return;
        }

        let paymentMethod = document.querySelector(
            'input[name="payment"]:checked'
        ).value;

        let order = {
            orderId: "BN" + Date.now(),

            books: cart,

            subtotal: subtotal,
            delivery: 40,
            total: subtotal + 40,

            customerName: document.getElementById(
                "customerName"
            ).value,

            phone: document.getElementById("phone").value,

            address: document.getElementById("address").value,

            payment: paymentMethod,

            upiId: paymentMethod === "UPI"
                ? document.getElementById("upiId").value
                : "",

            orderDate: new Date().toLocaleDateString(),

            status: "Order Placed"
        };

        localStorage.setItem(
            "bookNestOrder",
            JSON.stringify(order)
        );

        /* Clear cart after order */

        localStorage.removeItem("bookNestCart");

        document.getElementById("orderForm").style.display = "none";

        document.getElementById("confirmation").style.display = "block";

        document.getElementById("orderNumber").textContent =
            "Order ID: " + order.orderId;
    }
);