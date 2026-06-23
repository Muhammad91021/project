
function loadBooks(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    fetch("php/get_books.php")
        .then(function (response) {
            return response.json();
        })
        .then(function (books) {
            container.innerHTML = "";

            if (books.length === 0) {
                container.innerHTML = '<p class="empty-msg">No books yet.</p>';
                return;
            }

            books.forEach(function (book, index) {
                var number = String(index + 1).padStart(2, "0");

                var card = document.createElement("div");
                card.className = "book-card";
                card.innerHTML =
                    '<div class="book-cover"><img src="' + book.image + '" alt="' + book.title + '"></div>' +
                    '<div class="book-meta">' +
                        '<span class="catalog-no">No. ' + number + '</span>' +
                        "<h4>" + book.title + "</h4>" +
                        '<p class="author">' + book.author + "</p>" +
                        '<span class="price-tag">$' + book.price + "</span>" +
                    "</div>";
                container.appendChild(card);
            });
        })
        .catch(function (error) {
            container.innerHTML = '<p class="empty-msg">Could not load books.</p>';
            console.log(error);
        });
}

// loads books into the admin catalog table
function loadBooksTable(tableBodyId) {
    var tbody = document.getElementById(tableBodyId);
    if (!tbody) return;

    fetch("php/get_books.php")
        .then(function (response) {
            return response.json();
        })
        .then(function (books) {
            tbody.innerHTML = "";
            books.forEach(function (book) {
                var row = document.createElement("tr");
                row.innerHTML =
                    "<td>" + book.title + "</td>" +
                    "<td>" + book.author + "</td>" +
                    "<td>$" + book.price + "</td>";
                tbody.appendChild(row);
            });
        });
}
