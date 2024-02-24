import { adaptToBooks } from "../adapters/book.adapter.mjs";

class BookService {
    constructor(books = []) {
        this.books = adaptToBooks(books);
    }

    get() {
        return this.books;
    }

    set(books) {
        this.books = adaptToBooks(books);
    }

    sortBooksByPublishedDate(order = 'asc') {
        const sorted = this.books.sort((a, b) => {
            if(order === 'desc') {
                return a.publishedDate - b.publishedDate;
            }
            return b.publishedDate - a.publishedDate;
        });
        
        this.books = sorted;
        return this;
    }

    toString() {
        return this.books.map((book) => book.toString()).join(', ');
    }
}

export default BookService;
