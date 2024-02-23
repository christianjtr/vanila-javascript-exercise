import { GOOGLE_API_BOOKS_CONFIG } from '../config/api.config.mjs';

async function fetchBooks () {
    try {
        const response = await fetch(GOOGLE_API_BOOKS_CONFIG.BASE_URL);
        const { items: books } = await response.json();
        return books;
    } catch(error) {
        console.error(error);
        throw Error('Error when requesting for books');
    }
}

export default {
    fetchBooks,
}