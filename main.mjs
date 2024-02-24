import BookService from './services/books.services.mjs';
import { fetchBooks } from './services/googleAPIBooks.services.mjs';
import { generateColumnLayoutElement, generateBookCardTemplate } from './templates/bookCard.template.mjs';

async function myApp() {
    // Fetch and map books...
    const rawBooks = await fetchBooks();
    const books = new BookService(rawBooks).sortBooksByPublishedDate().get();

    // Console log...
    console.log(books.toString());

    // Attach to DOM...
    const targetElement = document.getElementById('books-container');
    const bookCardTemplates = books.map((book) => generateBookCardTemplate(book));
    bookCardTemplates.forEach((bookCardTemplate) => {
        const element = generateColumnLayoutElement();
        element.appendChild(bookCardTemplate);
        targetElement.appendChild(element);
    });
};

myApp();
