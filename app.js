log = console.log;

// SELECTORS //
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const pages = document.querySelector("#pages");
const bookCompleted = document.querySelector("#bookCompleted");
const submitbtn = document.querySelector("#submitbtn");
const library = document.querySelector("#cardContainer");
const close = document.querySelector("#closeOut");



// NEW ELEMENT CREATORS //




// log(bookTitle, bookAuthor, pages, bookCompleted, submitbtn);

// log(checkBox.checked);
// log(bookTitle.value);




/////////////////////////


let myLibrary = [{ title: "Atomic Habits", author: "James Clear", pages: 479, completed: true }];

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


let addNewBook = function () {
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
        addCardStack(bookTitle.value, bookAuthor.value, pages.value, bookCompleted.checked);
        log(myLibrary);
        bookTitle.value = "";
        bookAuthor.value = "";
        pages.value = "";
        bookCompleted.checked = false;
        // displayBooks(myLibrary);
    }
}
let addCardStack = function (title, author, pages, completed) {
    //  NEW ELEMENTS //
    const newCard = document.createElement("div");
    const cardContent = document.createElement("div");
    const h3 = document.createElement("h3");
    const authorSpan = document.createElement("span");
    const pagesSpan = document.createElement("span");
    const closeButton = document.createElement("span");


    // Invokation //
    newCard;
    cardContent;
    closeButton;

    // CLASS NAMING //
    newCard.className = "card";
    h3.className = "cardTitle";
    cardContent.className = "cardContents";
    authorSpan.className = "cardAuthor";
    pagesSpan.className = "cardPages";
    closeButton.className = "closeOut";

    // INNERTEXTS //
    h3.innerText = `${title}`;
    authorSpan.innerText = `By: ${author}`;
    pagesSpan.innerText = `Pages: ${pages}`;

    // APPENDAGES //
    newCard.append(closeButton);
    newCard.append(cardContent);
    cardContent.append(h3);
    cardContent.append(authorSpan);
    cardContent.append(pagesSpan);

    library.append(newCard);

}

// function displayBooks(libraryArray) {
//     for (item of libraryArray) {
//         for (obj in item) {
//             log(item[obj]);
//         }
//     }
// }

function deleteCard() {
    log("itworks")
}
submitbtn.addEventListener("click", addNewBook);
closeOut.addEventListener("click", deleteCard);









// log(myLibrary);