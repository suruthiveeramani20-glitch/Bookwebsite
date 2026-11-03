/* Search Books */

const searchInput = document.getElementById("searchInput");

const bookCards = document.querySelectorAll(
    ".book-card, .best-card, .new-card"
);

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    bookCards.forEach(function (card) {

        const bookName = card.textContent.toLowerCase();

        if (bookName.includes(searchValue)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});




/* Newsletter */

document.getElementById("newsletterForm")
.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById(
        "newsletterEmail"
    ).value;

    if (email.trim() !== "") {

        alert("Thank you for subscribing to BookNest!");

        document.getElementById(
            "newsletterEmail"
        ).value = "";

    }

});