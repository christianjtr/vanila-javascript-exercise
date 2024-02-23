import { Book, AvailableBook } from "../models/book.mjs";

function extractBaseBookData (book)  {
    const { volumeInfo } = book;
    return {
        title: volumeInfo.title, 
        authors: volumeInfo.authors, 
        publishedDate: volumeInfo.publishedDate, 
        publisher: volumeInfo.publisher, 
        categories: volumeInfo.categories
    }
}


function mapToBookDTO (rawBooks) {
    const books = rawBooks.map((book) => {
        return new Book(extractBaseBookData(book));
    });

    return books;
}

function mapToAvailableBookDTO (rawBooks) {
    const availableBooks = rawBooks.map(({ saleInfo, ...book}) => {
        return new AvailableBook(extractBaseBookData(book), saleInfo.listPrice?.amount, saleInfo.buyLink);
    });

    return availableBooks;
}

export {
    mapToBookDTO,
    mapToAvailableBookDTO,
};