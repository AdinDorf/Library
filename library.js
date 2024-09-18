const myLibrary = [];
const cardList = document.querySelector(".card-list");
const openModal = document.querySelector(".roundbutton");
const modal = document.querySelector("#modal");
const myForm = document.forms.addBookForm;
const submitForm = document.querySelector(".submit");
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

    newBook.setAttribute("data-index", myLibrary.indexOf(book));

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

    let removeBook = document.createElement("button");
    newBook.appendChild(removeBook);
    removeBook.classList.add("removeBookBtn");
    removeBook.textContent = "x";
}


// Create a bunch of books manually
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 383389, true);
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, false);

myLibrary.forEach(book => {
    console.log("Books: " + book.info());
});

openModal.addEventListener("click", ()=> {
    modal.showModal();
 })

 myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = myForm.title.value;
    let author = myForm.author.value;
    let pages = myForm.words.value;
    let read = myForm.read.checked;

    if ((title == null || title == "") || (author == null || author == "") || (pages == null || pages == ""))
    {
        alert("Please fill out all required fields");
        return false;
    }

    modal.close();
    myForm.reset();
    addBookToLibrary(title, author, pages, read);
 })