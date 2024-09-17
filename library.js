const myLibrary = [];
const cardList = document.querySelector(".card-list");

//Book Constructor
function Book (title, author, wordCount, read) {
    this.title = title;
    this.author = author;
    this.wordCount = wordCount;
    this.read = read;
    this.info = function() {
        return this.title + this.author + this.wordCount + this.read;
    };
}

function addBookToLibrary(title, author, wordCount, read) {
    let book = new Book(title, author, wordCount, read);
    myLibrary.push(book);

    console.log("Adding " + book.info());

    let newBook = document.createElement("div")
    newBook.classList.add("book");
    cardList.appendChild(newBook);

    let newBookTitle = document.createElement('h2');
    newBook.appendChild(newBookTitle);
    newBookTitle.textContent = book.title;
   
    let newBookAuthor = document.createElement('p');
    newBook.appendChild(newBookAuthor);
    newBookAuthor.textContent = book.author;

    let newBookWordCount = document.createElement('p');
    newBook.appendChild(newBookWordCount);
    newBookWordCount.textContent = book.wordCount;

    let newBookRead = document.createElement('p');
    newBook.appendChild(newBookRead);
    newBookRead.textContent = book.read;
}

function InitializeDisplay(){
    myLibrary.forEach(book => {
        console.log("Adding " + book.info());

        let newBook = document.createElement("div")
        newBook.classList.add("book");
        cardList.appendChild(newBook);

        let newBookTitle = document.createElement('h2');
        newBook.appendChild(newBookTitle);
        newBookTitle.textContent = book.title;
       
        let newBookAuthor = document.createElement('p');
        newBook.appendChild(newBookAuthor);
        newBookAuthor.textContent = book.author;

        let newBookWordCount = document.createElement('p');
        newBook.appendChild(newBookWordCount);
        newBookWordCount.textContent = book.wordCount;

        let newBookRead = document.createElement('p');
        newBook.appendChild(newBookRead);
        newBookRead.textContent = book.read;
    });
}


// Create a book manually
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 383389, "read");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, "unread");

myLibrary.forEach(book => {
    console.log("Books: " + book.info());
});
