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
let bookCount = 4;
let bookList;
let readCount = 0;
let unreadCount = 4;
let unreadDisplay = document.querySelector("#unreadCount");
let readDisplay = document.querySelector("#readCount");

unreadDisplay.innerText = unreadCount;
readDisplay.innerText = readCount;

// log(bookTitle, bookAuthor, pages, bookCompleted, submitbtn);
// log(checkBox.checked);
// log(bookTitle.value);




/////////////////////////


let myLibrary = [
    { title: "Atomic Habits", author: "James Clear", pages: 479, completed: true },
    { title: "Marvin's Authobiography", author: "Marvin T.", pages: 626, completed: true },
    { title: "John's Authobiography", author: "Johnny", pages: 100, completed: false },
    { title: "Mom's Authobiography", author: "Mom", pages: 36, completed: true }
];

// function Book(title, author, pages, completed) {
//     this.title = title,
//         this.author = author,
//         this.pages = Number(pages),
//         this.completed = completed
// }

class Book {
    constructor(title, author, pages, completed) {
        this.title = title,
            this.author = author,
            this.pages = pages,
            this.completed = completed
    }
}




// function addBookToLibrary() {

// }

// INPUT VALUES INTO AN OBJECT, AND PLACE OBJECT INTO ARRAY OF OBJECTS. 
// FROM THESE OBJECTS YOU CREATE TAKE OUT THE VALUES AND PLACE THEM INTO A CARD DIV.
//  WHEN YOU CLICK THE X ON THE CARD, THE OBJECT MUST BE DELETED FROM THE ARRAY AND CARD DELETED.
// TO LINK THE OBJECT TO THE ARRAY INDEX WE MUST USE SOMETHING.
// LINK ARRAY INDEX TO CARD VIA ATTRIBUTE NUMBERS? IF SO HOW DO YOU CHANGE THE FLUCTUATING NUMBERS ON THE HTML ELEMENTS ACCORDING TO ARRAY INDEX.


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

        // REFACTORING WITH CLASS //


        let book1 = new Book()

        const newBook = new Book(bookTitle.value, bookAuthor.value, pages.value, bookCompleted.checked);
        myLibrary.push(newBook);
        addCardStack(bookTitle.value, bookAuthor.value, pages.value, bookCompleted.checked);
        log(myLibrary);
        bookTitle.value = "";
        bookAuthor.value = "";
        pages.value = "";
        bookCompleted.checked = false;
        updateBookCount();
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

    const readLabel = document.createElement("span");
    const toggle = document.createElement("label");
    const input = document.createElement("input");
    const sliderSpan = document.createElement("span");


    // Invokation //
    newCard;
    cardContent;
    closeButton;

    // CLASS NAMING //
    newCard.className = "card";
    bookCount++
    newCard.setAttribute("data-bookNumber", `${bookCount - 1}`);
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

    // ADD TOGGLE BUTTON TO CARDS //
    toggle.className = "switch";
    input.type = "checkbox";
    input.id = "read_toggle";
    toggle.append(input);
    sliderSpan.className = "slider round";
    toggle.append(sliderSpan);
    cardContent.append(toggle);


    if (completed == true) {
        input.checked = true;
        readCount++;
    }
    else {
        input.checked = false;
        unreadCount++;
    }
    updateReadBooks();
    library.append(newCard);
    btnArr();
    updateBookCount();
    assignToggles();
}

//============================== DELETE CARD FROM STACK ===================================//
function deleteCard() {

    let bookIndex = this.parentNode.dataset.booknumber;

    log("Book Number: " + bookIndex);

    myLibrary.splice(bookIndex, 1);

    this.parentNode.remove();


    bookList = document.querySelectorAll("[data-bookNumber]");
    log(bookList);

    for (let i = bookIndex; i < bookList.length; i++) {
        log(bookList[i].dataset.booknumber = `${i}`);
    };

    --bookCount;
    updateBookCount();
    log(myLibrary)

    if (this.nextElementSibling.lastElementChild.firstElementChild.checked == true) {
        readCount--;

    }
    else if (this.nextElementSibling.lastElementChild.firstElementChild.checked == false) {
        unreadCount--;
    }
    readDisplay.innerText = readCount;
    unreadDisplay.innerText = unreadCount;
    log(this.nextElementSibling.lastElementChild.firstElementChild);
}


submitbtn.addEventListener("click", addNewBook);


let btnArr = function () {
    btnList = Array.from(closeBtn);
    btnList.forEach(button => {
        button.addEventListener("click", deleteCard);
    });
    log(btnList);
}

function updateBookCount() {
    let bookNum = document.querySelector("#bookCount");
    bookNum.innerText = bookCount;
}


function updateReadBooks() {
    log(this);
    if (this.checked == true) {
        readCount++;
        unreadCount--;

    }
    else if (this.checked == false) {
        unreadCount++;
        readCount--;

    }
    readDisplay.innerText = readCount;
    unreadDisplay.innerText = unreadCount;



}

function assignToggles() {
    let toggleList = document.querySelectorAll("#read_toggle");
    toggleList.forEach(toggle => toggle.addEventListener("click", updateReadBooks));
}

btnArr();
updateBookCount();
assignToggles();







log(myLibrary);