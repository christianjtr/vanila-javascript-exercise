class Book {
    constructor(book) {
        this.title = book.title;
        this.authors =  book.authors;
        this.publishedDate =  new Date(book.publishedDate);
        this.publisher = book.publisher || 'N/D';
        this.categories = book.categories || 'N/D';
    }

    toString() {
        const formatDate = (date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
        const message = `
            ${this.title}; 
            ${this.authors.join(', ')}; 
            ${formatDate(this.publishedDate)}; 
            ${this.publisher}; 
            ${this.categories}`;

        return message;
    }
}

class AvailableBook extends Book {
    constructor(book, listPrice = 0, buyLink = '') {
        super(book);
        this.listPrice =  listPrice;
        this.buyLink = buyLink;
    }

    toString() {
        const message = `${super.toString()} - ${this.listPrice} at ${this.buyLink}`;
        return message;
    }

    getPrice() {
        return this.listPrice;
    }

    getBuyLink() {
        return this.buyLink;
    }
}

export {
    Book,
    AvailableBook
}