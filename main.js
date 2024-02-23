// Empty js file

class Book {
    constructor(title, authors, publishedDate, publisher, categories, raw) {
        this.title = title;
        this.authors =  authors;
        this.publishedDate =  publishedDate;
        this.publisher = publisher;
        this.categories = categories || 'N/D';
        this._raw = raw;
    }

    userReadableFormat() {
        const userFriendlyFormat = `
            ${this.title}; 
            ${this.authors.join(', ')}; 
            ${this.publishedDate}; 
            ${this.publisher}; 
            ${this.categories}`;

        return userFriendlyFormat;
    }
}

class AvailableBook extends Book {
    constructor(listPrice, listPrice) {
        super();
        this.listPrice =  listPrice;
        this.buyLink = buyLink;
    }

    getPrice() {
        return this._raw.salesInfo.listPrice;
    }

    getBuyLink() {
        return this._raw.salesInfo.buyLink;
    }

    
}

// Service...
async function fetchBooks () {
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript');
        const { items: books } = await response.json();
        return books;
    } catch(error) {
        console.error(error);
        throw Error('Error when requesting for books');
    }
}

// Adapters... (DTO)
function mapToBookDTO (rawBooks) {
    const books = rawBooks.map(({ volumeInfo, ...raw }) => {
        return new Book(
            volumeInfo.title, 
            volumeInfo.authors, 
            volumeInfo.publishedDate, 
            volumeInfo.publisher, 
            volumeInfo.categories,
            raw);
    });

    return books;
}

function printBookInfo(books) {
    books.forEach((book) => console.log(book.userReadableFormat()));
}

function attachToDOM(books) {
    books.forEach((book) => {
        const newElement = document.createElement("p"); 
        newElement.setAttribute('class', 'book-card');
        newElementContent = document.createTextNode(book.userReadableFormat());
        newElement.appendChild(newElementContent);
        document.body.appendChild(newElement);
    });
}

async function app () {
    const rawBooks = await fetchBooks();
    const books = mapToBookDTO(rawBooks);
    printBookInfo(books);
    attachToDOM(books);
}

app();