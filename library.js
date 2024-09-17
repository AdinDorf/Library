const myLibrary = [];
const cardList = document.querySelector(".card-list");

//Book Constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function updateDisplay(){
    myLibrary.forEach(book => {
        console.log("Adding " + book.info());
        let newBook = document.createElement("li")
        newBook.classList.add("book");
        cardList.appendChild(newBook);
    });
}


// Create a book manually
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 383389, "read");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");

updateDisplay();