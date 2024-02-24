import Book from "../models/book.mjs";

function getBookData (book)  {
    const { volumeInfo, saleInfo } = book;
    return {
        title: volumeInfo.title, 
        authors: volumeInfo.authors, 
        publishedDate: volumeInfo.publishedDate, 
        publisher: volumeInfo.publisher, 
        categories: volumeInfo.categories,
        thumbnailLink: volumeInfo.imageLinks?.thumbnail,
        amount: saleInfo.listPrice?.amount,
        buyLink: saleInfo.buyLink,
    };
}

function adaptToBooks (rawBooks) {
    const books = rawBooks.map((book) => {
        return new Book(getBookData(book));
    });

    return books;
}

export {
    adaptToBooks,
};
