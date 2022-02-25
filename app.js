log = console.log;

// SELECTORS //
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const pages = document.querySelector("#pages");
const bookCompleted = document.querySelector("#bookCompleted");
const submitbtn = document.querySelector("#submitbtn");

// log(bookTitle, bookAuthor, pages, bookCompleted, submitbtn);

// log(checkBox.checked);
// log(bookTitle.value);




/////////////////////////


let myLibrary = [];

function Book(title, author, pages, completed) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.completed = completed
}


function addBookToLibrary() {

}

function addValues() {

}


addNewBook = function () {
    const newBook = new Book(bookTitle.value, bookAuthor.value, pages.value, bookCompleted.checked);
    myLibrary.push(newBook);
    log(myLibrary);
    bookTitle.value = "";
    bookAuthor.value = "";
    pages.value = "";
    bookCompleted.checked = false;
}

submitbtn.addEventListener("click", addNewBook);








log(myLibrary);