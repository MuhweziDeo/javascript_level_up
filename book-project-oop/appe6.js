class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookList(book) {
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

    showAlert(messgae, className) {
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

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();

        }

    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }
}


// add book list
UI.prototype.addBookToList = function (book) {}
// show alerts
UI.prototype.showAlert = function (message, className) {

}

// delete book
UI.prototype.deleteBook = function (target) {

};
// clear fields
UI.prototype.clearFields = function () {


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