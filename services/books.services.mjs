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

    getAVGRatingByCategory(category) {
        const ratings = this.books
        .filter(({ categories }) => categories.includes(category))
        .map(({ averageRating }) => averageRating)
        .map(Number)
        .filter((value => !isNaN(value)));

        const sum = ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const result = sum / ratings.length;
        return result;
    }

    toString() {
        return this.books.map((book) => book.toString()).join(', ');
    }
}

export default BookService;
