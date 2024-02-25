import { Book, AvailableBook } from "../models/book.mjs";

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
        averageRating: volumeInfo.averageRating,
    };
}

function adaptToBooks (rawBooks) {
    const books = rawBooks.map((book) => {
        return new Book(getBookData(book));
    });

    return books;
}

function adaptToAvailableBooks (rawBooks) {
    const availableBooks = rawBooks.map((book) => {
        const { saleInfo } = book;
        return new AvailableBook(getBookData(book), saleInfo.listPrice?.amount, saleInfo.buyLink);
    });

    return availableBooks;
}

export {
    adaptToBooks,
    adaptToAvailableBooks
};
