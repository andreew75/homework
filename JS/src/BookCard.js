import React from 'react';

function BookCard({ book }) {
    return (
        <div className="book-card">
            <div className="book-image-container">
                <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                />
            </div>
            <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Михаил Булгаков</p>
                <p className="book-year">Год создания: {book.year}</p>
                <p className="book-description">{book.description}</p>
            </div>
        </div>
    );
}

export default BookCard;