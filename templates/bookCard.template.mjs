function generateBookCardTemplate(book) {
    
    const bookCard = document.createElement("div");
    bookCard.setAttribute('id', `book_card_${Math.random()}`);
    bookCard.setAttribute('class', 'card m-4');
    
    bookCard.innerHTML = `
        <div class="card-content">
            <p class="is-size-6">
            ${book.toString()}
            </p>
        </div>
    `;
    
    return bookCard;
}

export {
    generateBookCardTemplate,
}