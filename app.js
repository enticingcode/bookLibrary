log = console.log;

// SELECTORS //
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const pages = document.querySelector("#pages");
const bookCompleted = document.querySelector("#bookCompleted");
const submitbtn = document.querySelector("#submitbtn");
const library = document.querySelector("#cardContainer");

// log(bookTitle, bookAuthor, pages, bookCompleted, submitbtn);

// log(checkBox.checked);
// log(bookTitle.value);




/////////////////////////


let myLibrary = [{ title: "Atomic Habits", author: "James Clear" }];

function Book(title, author, pages, completed) {
    this.title = title,
        this.author = author,
        this.pages = Number(pages),
        this.completed = completed
}


function addBookToLibrary() {

}

function addValues() {

}


addNewBook = function () {
    if (bookTitle.value == "") {
        alert("Please insert a book title");
    }
    else if (bookAuthor.value == "") {
        alert("Please insert an Author");
    }
    else if (pages.value == "") {
        alert("Please insert number of pages");
    }
    else if (isNaN(pages.value)) {
        alert("Please insert valid number of pages");
    }
    else {
        const newBook = new Book(bookTitle.value, bookAuthor.value, pages.value, bookCompleted.checked);
        myLibrary.push(newBook);
        log(myLibrary);
        bookTitle.value = "";
        bookAuthor.value = "";
        pages.value = "";
        bookCompleted.checked = false;
        displayBooks(myLibrary);
    }
}

function displayBooks(libraryArray) {
    for (item of libraryArray) {
        for (obj in item) {
            log(item[obj]);
        }
    }
}

submitbtn.addEventListener("click", addNewBook);










// log(myLibrary);