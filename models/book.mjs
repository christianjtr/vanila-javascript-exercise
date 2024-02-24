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
        } = book;

        this.title = title;
        this.authors =  authors;
        this.publishedDate =  new Date(publishedDate);
        this.publisher = publisher;
        this.categories = categories;
        this.thumbnailLink = thumbnailLink;
        this.amount = amount;
        this.buyLink = buyLink;
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

export default Book;
