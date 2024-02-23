import bookServices from './services/books.services.mjs';
import { mapToBookDTO } from './adapters/book.adapter.mjs';
import { generateBookCardTemplate } from './templates/bookCard.template.mjs';
import { printOutBookInfo } from './utils/consoleOutput.utils.mjs';

function sortBooksByPublishedDate(books) {
    return books.sort((a, b) => b.publishedDate - a.publishedDate);
}

// function calcAVGRatingGivenCategory(books, category) {
//     return books.filter(({ categories }) => Array.isArray(categories) && categories.includes(category));
// }

(async function() {
    const rawBooks = await bookServices.fetchBooks();
    const books = sortBooksByPublishedDate(mapToBookDTO(rawBooks));
    
    // Console log...
    printOutBookInfo(books);

    // Attaching to DOM...
    const bookCardTemplates = books.map((book) => generateBookCardTemplate(book));
    const target = document.getElementById('root');
    bookCardTemplates.forEach((bookCardTemplate) => target.appendChild(bookCardTemplate));
})();