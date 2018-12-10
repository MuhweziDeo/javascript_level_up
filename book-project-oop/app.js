function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// constructor 
function UI() {};
// add book list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    // create tr element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class ="delete">X<a></td>
    `;
    list.appendChild(row);
}
// show alerts
UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form)
    setTimeout(function () {
        document.querySelector('.error').remove();
    }, 3000);
}

// delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();

    }
};
// clear fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}
// even listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    // get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // init book 
    const book = new Book(title, author, isbn);
    // init Ui
    const ui = new UI();
    // validate
    if (title === '' || author === "" || isbn === "") {
        ui.showAlert('missing Fields');
    } else {
        // add book to list
        ui.addBookToList(book);
        // clear fields
        ui.clearFields();
    }


    e.preventDefault()

});

// event listner for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    alert('deleted')
    e.preventDefault();
})