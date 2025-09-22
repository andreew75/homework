import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src="./logo.png" alt="Логотип" className="logo" />
                <h1 className="site-title">Михаил Булгаков: Книжный каталог</h1>
            </div>
        </header>
    );
}

export default Header;