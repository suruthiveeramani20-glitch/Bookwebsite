const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");
const noBooks = document.getElementById("noBooks");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    let visibleBooks = 0;

    bookCards.forEach(function (card) {
        const bookName = card.querySelector("h3").textContent.toLowerCase();
        const authorName = card.querySelector("p").textContent.toLowerCase();
        const bookGenre = card.querySelector(".genre").textContent.toLowerCase();

        if (
            bookName.includes(searchValue) ||
            authorName.includes(searchValue) ||
            bookGenre.includes(searchValue)
        ) {
            card.style.display = "block";
            visibleBooks++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleBooks === 0) {
        noBooks.style.display = "block";
    } else {
        noBooks.style.display = "none";
    }
});


function buyBook(title, author, price, image, category) {
    const book = {
        title: title,
        author: author,
        price: price,
        image: image,
        category: category
    };

    const bookData = encodeURIComponent(JSON.stringify(book));

    window.location.href = "order.html?book=" + bookData;
}