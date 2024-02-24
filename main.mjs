import BookService from './services/books.services.mjs';
import { fetchBooks } from './services/googleAPIBooks.services.mjs';
import { generateColumnLayoutElement, generateBookCardTemplate } from './templates/bookCard.template.mjs';

async function myApp() {
    // Fetch and map books...
    const rawBooks = await fetchBooks();
    const booksService = new BookService(rawBooks);
    const books = booksService.sortBooksByPublishedDate().get();

    // Books...
    console.log({ books: books.toString() });

    // AVG rating by category = 'Computers'
    console.log('Calculate and output the average rating of the “Computers” books. =', booksService.getAVGRatingByCategory('Computers'));

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
