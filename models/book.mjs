class Book {
    constructor(book) {
        const { 
            title, 
            authors, 
            publishedDate, 
            publisher = 'N/D', 
            categories = 'N/D',
            thumbnailLink = '',
            amount = 0,
            buyLink = '',
            averageRating,
        } = book;

        this.title = title;
        this.authors =  authors;
        this.publishedDate =  new Date(publishedDate);
        this.publisher = publisher;
        this.categories = categories;
        this.thumbnailLink = thumbnailLink;
        this.amount = amount;
        this.buyLink = buyLink;
        this.averageRating = averageRating;
    }

    toString() {
        const formatDate = (date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
        const message = `
            ${this.title}; 
            ${this.authors.join(', ')}; 
            ${formatDate(this.publishedDate)}; 
            ${this.publisher}; 
            ${this.categories}
            SaleInfo: ${this.amount} at ${this.buyLink}`;

        return message;
    }
}

class AvailableBook extends Book {
    constructor(book, listPrice, buyLink) {
        super(book);
        this.listPrice = listPrice;
        this.buyLink = buyLink;
    }

    toString() {
        const message = `
            ${super.toString()} - ${this.listPrice}$ at ${this.buyLink}`;

        return message;
    }
}

export {
    Book,
    AvailableBook,
};
