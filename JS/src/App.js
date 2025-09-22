import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import BookCard from './BookCard';
import './App.css';

function App() {
    const books = [
        {
            id: 1,
            title: "Мастер и Маргарита",
            year: 1928,
            image: "/books/book06.png",
            description: "Философский роман о добре и зле"
        },
        {
            id: 2,
            title: "Иван Васильевич",
            year: 1936,
            image: "/books/book05.png",
            description: "Фантастическая пьеса"
        },
        {
            id: 3,
            title: "Собачье сердце",
            year: 1925,
            image: "/books/book04.png",
            description: "Повесть о научном эксперименте"
        },
        {
            id: 4,
            title: "Роковые яйца",
            year: 1924,
            image: "/books/book03.png",
            description: "Фантастическая повесть"
        },
        {
            id: 5,
            title: "Белая гвардия",
            year: 1925,
            image: "/books/book02.png",
            description: "Роман о Гражданской войне"
        },
        {
            id: 6,
            title: "Морфий",
            year: 1926,
            image: "/books/book01.png",
            description: "Цикл рассказов о работе врача"
        }
    ];

    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="container">
                <h1 className="page-title">Книги Михаила Булгакова</h1>
                <div className="books-grid">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
