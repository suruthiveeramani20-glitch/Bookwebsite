/* Get selected book details */

const params = new URLSearchParams(window.location.search);
const bookData = params.get("book");

let selectedBook = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 450,
    image: "../images/harry-potter.jpg",
    category: "Fantasy Fiction"
};

if (bookData) {
    try {
        selectedBook = JSON.parse(bookData);
    } catch (error) {
        console.log("Book details could not be loaded.");
    }
}

/* Display book */

document.getElementById("bookTitle").textContent = selectedBook.title;
document.getElementById("bookAuthor").textContent = "By " + selectedBook.author;
document.getElementById("bookCategory").textContent = selectedBook.category;
document.getElementById("bookPrice").textContent = selectedBook.price;
document.getElementById("bookImage").src = selectedBook.image;
document.getElementById("bookImage").alt = selectedBook.title;


/* Quantity and total */

const quantityInput = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");
const payButton = document.getElementById("payButton");

function updateTotal() {
    const quantity = Number(quantityInput.value);
    const total = selectedBook.price * quantity;

    totalPrice.textContent = total;
    updateButtonText();
}

document.getElementById("plusBtn").addEventListener("click", function () {
    let quantity = Number(quantityInput.value);

    if (quantity < 10) {
        quantityInput.value = quantity + 1;
    }

    updateTotal();
});

document.getElementById("minusBtn").addEventListener("click", function () {
    let quantity = Number(quantityInput.value);

    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }

    updateTotal();
});


/* Change button according to payment */

const paymentOptions = document.querySelectorAll('input[name="payment"]');

function updateButtonText() {
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const total = Number(totalPrice.textContent);

    if (payment === "COD") {
        payButton.textContent = "Place an Order";
    } else {
        payButton.textContent = "Pay ₹" + total;
    }
}

paymentOptions.forEach(function (option) {
    option.addEventListener("change", updateButtonText);
});


/* Place order */

document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();
    const customerAddress = document.getElementById("customerAddress").value.trim();

    const payment = document.querySelector('input[name="payment"]:checked').value;

    const order = {
        orderId: "BN" + Date.now(),
        book: selectedBook.title,
        author: selectedBook.author,
        image: selectedBook.image,
        quantity: Number(quantityInput.value),
        total: Number(totalPrice.textContent),
        customer: customerName,
        phone: customerPhone,
        address: customerAddress,
        payment: payment,
        status: "Order Placed"
    };

    localStorage.setItem("bookNestOrder", JSON.stringify(order));

    document.getElementById("orderSuccess").hidden = false;

    payButton.textContent = "Order Confirmed";
    payButton.disabled = true;
});


/* Track an order */

document.getElementById("trackButton").addEventListener("click", function () {
    window.location.href = "track.html";
});


/* Initial total */

updateTotal();