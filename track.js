// BOOKNEST TRACK ORDER

// 1. GET SAVED ORDER DETAILS

const savedOrder = localStorage.getItem("bookNestOrder");

if (savedOrder) {

    const order = JSON.parse(savedOrder);

    document.getElementById("trackingImage").src =
        order.image;

    document.getElementById("trackingImage").alt =
        order.book;

    document.getElementById("trackingBookName").textContent =
        order.book;

    document.getElementById("trackingAuthor").textContent =
        "By " + order.author;

    document.getElementById("trackingOrderId").textContent =
        "Order ID: " + order.orderId;

    document.getElementById("trackingQuantity").textContent =
        "Quantity: " + order.quantity;

    document.getElementById("trackingPayment").textContent =
        "Payment Method: " + order.payment;

    document.getElementById("trackingTotal").textContent =
        "Total Amount: ₹" + order.total;

    document.getElementById("trackingCustomer").textContent =
        order.customer;

    document.getElementById("trackingPhone").textContent =
        order.phone;

    document.getElementById("trackingAddress").textContent =
        order.address;

}

else {

    document.getElementById("trackingBookName").textContent =
        "No Order Found";

    document.getElementById("trackingAuthor").textContent =
        "Please place an order first.";

}


// 2. ORDER TRACKING

const steps = document.querySelectorAll(".tracking-step");

const trackingNote = document.querySelector(".tracking-note");


// Status messages

const statusMessages = [

    "Your order has been confirmed.",

    "Your book is being prepared.",

    "Your book has been dispatched.",

    "Your book is on the way.",

    "Your book has been delivered successfully!"

];


// 3. STATUS TIME

// Each status changes after 5 seconds

const statusDuration = 5000;


// 4. START FROM ORDER PLACED

let currentStep = 0;


// 5. UPDATE STATUS FUNCTION

function updateTracking() {

    // Remove all previous active status

    steps.forEach(function (step, index) {

        step.classList.remove("active");

        const circle =
            step.querySelector(".step-circle");

        // Reset previous tick

        circle.textContent = index + 1;

    });


    // Activate current status only

    const currentStatus = steps[currentStep];

    currentStatus.classList.add("active");


    // Show tick in current status

    const currentCircle =
        currentStatus.querySelector(".step-circle");

    currentCircle.textContent = "✓";


    // Update delivery message

    trackingNote.textContent =
        statusMessages[currentStep];


    // 6. MOVE TO NEXT STATUS

    if (currentStep < steps.length - 1) {

        setTimeout(function () {

            currentStep++;

            updateTracking();

        }, statusDuration);

    }

}


// 7. START TRACKING

updateTracking();