log = console.log;

// SELECTORS //
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const pages = document.querySelector("#pages");
const bookCompleted = document.querySelector("#bookCompleted");
const submitbtn = document.querySelector("#submitbtn");
const library = document.querySelector("#cardContainer");
const closeBtn = document.getElementsByClassName("closeOut");

let btnList;
let bookCount = 2;

// log(bookTitle, bookAuthor, pages, bookCompleted, submitbtn);
// log(checkBox.checked);
// log(bookTitle.value);




/////////////////////////


let myLibrary = [
    { title: "Atomic Habits", author: "James Clear", pages: 479, completed: true },
    { title: "Marvin's Authobiography", author: "Marvin T.", pages: 626, completed: true }
];

function Book(title, author, pages, completed) {
    this.title = title,
        this.author = author,
        this.pages = Number(pages),
        this.completed = completed
}


function addBookToLibrary() {

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
    newCard.setAttribute("data-bookNumber", `${++bookCount}`);
    h3.className = "cardTitle";
    cardContent.className = "cardContents";
    authorSpan.className = "cardAuthor";
    pagesSpan.className = "cardPages";
    closeButton.className = "closeOut";

    // INNERTEXTS //
    h3.innerText = `${title}`;
    authorSpan.innerText = `By: ${author}`;
    pagesSpan.innerText = `Pages: ${pages}`;
    closeButton.innerHTML = "<img src='/icons/close_black_24dp.svg' alt=''>";

    // APPENDAGES //
    newCard.append(closeButton);
    newCard.append(cardContent);
    cardContent.append(h3);
    cardContent.append(authorSpan);
    cardContent.append(pagesSpan);

    library.append(newCard);
    btnArr();
}

// function displayBooks(libraryArray) {
//     for (item of libraryArray) {
//         for (obj in item) {
//             log(item[obj]);
//         }
//     }
// }

function deleteCard() {
    log(this.parentNode.dataset.booknumber);
    myLibrary.splice(this.parentNode.dataset.booknumber - 1, 1);
    this.parentNode.remove();


    // THIS LOOP DOESN'T WORK BECAUSE WHEN I DELETE BOOK 2, IT SELECTS ALL OTHER CARDS AND ASSIGNS THEM BOOK 2;

    let bookList = document.querySelectorAll("[data-booknumber]");
    bookList.forEach(item => item.setAttribute("data-booknumber", `${this.parentNode.dataset.booknumber}`))

    /// IN ORDER TO SET NUMBERS CORRECTLY I HAVE TO FIGURE OUT A WAY OF CHANGING THE NUMBERS ACCORDING TO THE ARRAY INDEX.

    //==========================================================================================================
    --bookCount;
    log(myLibrary)
}


submitbtn.addEventListener("click", addNewBook);


let btnArr = function () {
    btnList = Array.from(closeBtn);
    btnList.forEach(button => {
        button.addEventListener("click", deleteCard);
    });
    log(btnList);
}



btnArr();









log(myLibrary);