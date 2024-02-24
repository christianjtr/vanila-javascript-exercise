function generateColumnLayoutElement(size = 'is-4') {
    const columnElement = document.createElement("div");
    columnElement.setAttribute('class', `column is-flex ${size}`);
    return columnElement;
}


function generateBookCardTemplate(book) {
    const card = document.createElement("div");

    card.setAttribute('id', `book_card_${Math.random()}`);
    card.setAttribute('class', 'card book-card');

    card.innerHTML = `
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img src="${book.thumbnailLink}" alt="${book.title} image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5">${book.title}</p>
                    <p class="subtitle is-6">${book.authors}</p>
                </div>
            </div>
            <div class="content">
                <span class="is-block"><strong>Publisher:</strong> ${book.publisher}</span>
                <span class="is-block"><strong>Categories:</strong> ${book.categories}</span>
                <span class="is-block"><strong>Price:</strong> ${book.amount}$</span>
                <time datetime="${book.publishedDate}">${book.publishedDate.toISOString()}</time>
                <a class="is-block" href="${book.buyLink}" target="_blank">Buy here</a>
            </div>    
        </div>
    `;
    
    return card;
}

export {
    generateColumnLayoutElement,
    generateBookCardTemplate,
}
