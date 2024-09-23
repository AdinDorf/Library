const myLibrary = new Map();
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
    myLibrary.set(title, book);
    updateDisplay();
}

function updateDisplay() {
    cardList.innerHTML = '';

    myLibrary.forEach(book => {

        let card = document.createElement("div");
        card.classList.add("card");
        cardList.appendChild(card);

        let newBook = document.createElement("div")
        newBook.classList.add("book");
        card.appendChild(newBook);
        

        newBook.setAttribute("data-title", book.title);

        let newBookTitle = document.createElement('h2');
        newBook.appendChild(newBookTitle);
        newBookTitle.textContent = book.title;
    

        let newBookAuthorLabel = document.createElement("p");
        newBookAuthorLabel.innerText= "By: ";
        newBook.appendChild(newBookAuthorLabel);
        
        let newBookAuthor = document.createElement('p');
        newBookAuthor.setAttribute('id', 'Author');
        newBook.appendChild(newBookAuthor);
        newBookAuthor.textContent = book.author;
        
        let newBookPageLabel = document.createElement("p");
        newBookPageLabel.innerText= "Words: ";
        newBook.appendChild(newBookPageLabel);
        
        let newBookWordCount = document.createElement('p');
        newBook.appendChild(newBookWordCount);
        newBookWordCount.textContent = book.wordCount;

        // let newBookRead = document.createElement('p');
        // newBook.appendChild(newBookRead);
        // newBookRead.textContent = book.read;

        let removeButton = document.createElement("button");
        newBook.appendChild(removeButton);
        removeButton.classList.add("removeBookBtn");
        removeButton.textContent = "x";
        removeButton.addEventListener("click", removeBook);


        //Create a disgusting but pretty slider toggle
 
        let readToggle = document.createElement("input");
        let readLabel = document.createElement("label");
        readLabel.innerText="Read? ";
        newBook.appendChild(readLabel);
        newBook.appendChild(readToggle);
        readToggle.setAttribute('type', 'checkbox');
        readToggle.classList.add('checkbox');
        readToggle.addEventListener("click", toggleRead);

        readToggle.checked = book.read;

        if (readToggle.checked === true) {
            newBook.classList.add("readBook");
        }
   
    });
}

function removeBook(event) {
    const target = event.target.parentElement.getAttribute('data-title');
    console.log("Removing" + target);
    myLibrary.delete(target);
    updateDisplay();
}

function toggleRead(event){
    const target = event.target.parentElement.getAttribute('data-title');
    const bookToToggle = myLibrary.get(target);
    console.log(target);
  
    bookToToggle.read = !bookToToggle.read;
    updateDisplay();
}

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
    addBookToLibrary(title, author, pages, read);
    modal.close();
    myForm.reset();
 })

 // Create a bunch of books manually
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 383389, true);
addBookToLibrary("The Crippled God", "Steven Erikson", 376000, false);

updateDisplay();
