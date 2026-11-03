const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");
const noBooks = document.getElementById("noBooks");


// Search Science Books
searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    let visibleBooks = 0;

    bookCards.forEach(function(card) {

        const bookName = card.querySelector("h3").textContent.toLowerCase();
        const authorName = card.querySelector("p").textContent.toLowerCase();
        const bookCategory = card.querySelector("span").textContent.toLowerCase();

        if (
            bookName.includes(searchValue) ||
            authorName.includes(searchValue) ||
            bookCategory.includes(searchValue)
        ) {
            card.style.display = "block";
            visibleBooks++;
        } else {
            card.style.display = "none";
        }

    });

    // Show message if no books are found
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