let myLibrary = [];

function Book() {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.value;
};

function addBookToLibrary() {
    event.preventDefault(); // Prevent the form from submitting data
    const theBook = new Book();
    myLibrary.push(theBook);
    console.log(myLibrary);
    formCompletion.style.display = 'none';
};

// Display content in html
function displayBooks() { 
    for (let ook in myLibrary) { 
        const content = document.createElement('div');
        content.innerHTML = 'Title: ' + myLibrary[ook].title + '<br>' + 'Author: ' + myLibrary[ook].author + '<br>' + 'Pages: ' + myLibrary[ook].pages + '<br>' + 'Read: ' + myLibrary[ook].read + '<br>';
        content.classList.add('book');
        containerCards.appendChild(content);
        // Create a remove button
        const removebtn = document.createElement('button');
        removebtn.classList.add('remove-btn');
        removebtn.innerHTML = 'Remove';
        content.appendChild(removebtn);
    };
};

const removebtn = document.querySelectorAll('.remove-btn');
removebtn.forEach(button => {
    button.addEventListener('click', () => {
    button.parentElement.remove();
    });
});

let author = document.querySelector('#author');
let title = document.querySelector('#title');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');

let submit = document.querySelector('#info');
submit.addEventListener('click', () => {
    addBookToLibrary();
    containerCards.innerHTML = '';
    displayBooks();
});



let book = document.querySelector('.book');
let containerCards = document.querySelector('.book-cards');

let formCompletion = document.querySelector('.form-completion');
const addBook = document.querySelector('.add-book');

addBook.addEventListener('click', () => {
    formCompletion.style.display = 'grid';
});

//