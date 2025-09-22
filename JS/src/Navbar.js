import React from 'react';

function Navbar() {
    const menuItems = [
        { id: 1, label: "Главная", href: "#home" },
        { id: 2, label: "Книги", href: "#books" },
        { id: 3, label: "Биография", href: "#biography" },
        { id: 4, label: "О проекте", href: "#about" },
        { id: 5, label: "Контакты", href: "#contacts" }
    ];

    return (
        <nav className="navbar">
            <ul className="nav-menu">
                {menuItems.map(item => (
                    <li key={item.id} className="nav-item">
                        <a href={item.href} className="nav-link">{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;