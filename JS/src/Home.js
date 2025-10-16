import {useEffect, useState} from "react";
import './Home.css';

function Home() {

    const [products, setProducts] = useState([
        { id: 1, name: 'Tomatoes', checked: false },
        { id: 2, name: 'Pumpkin', checked: false },
        { id: 3, name: 'Beet', checked: false },
        { id: 4, name: 'Potato', checked: false },
        { id: 5, name: 'Carrot', checked: false }
    ]);

    const checkboxChange = (productId) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId ? { ...product, checked: !product.checked } : product
            )
        );
    };

    const selectedStyle = {
        backgroundColor: '#d6e5fa',
        // borderColor: '#2196f3',
        boxShadow: '0 2px 4px rgba(33, 150, 243, 0.2)',
        borderRadius: '5px',
        fontWeight: '700',
    };

    const cartCount = products.filter(product => product.checked).length;

    return (
        <div>
            <h1>Home Page</h1>
            <div className="title">
                <h2>Choose vegetables</h2>
            </div>
            <div className="shopping-cart">
                <fieldset className="items-list">
                    {products.map((product) => (
                        <div key={product.id} className="product-item" style={product.checked ? selectedStyle : {}}>
                            <label className={product.checked ? 'selected-label' : ''}>{product.name}</label>
                            <input
                                type="checkbox"
                                name="vegetables"
                                value={product.name.toLowerCase()}
                                checked={product.checked}
                                onChange={() => checkboxChange(product.id)}
                            />
                            <span className={`icon ${product.checked ? 'selected-icon' : ''}`}>
                                {product.checked ? '+️' : '-'}
                            </span>
                        </div>
                    ))}
                </fieldset>
            </div>

            <div className="added-cart">
                <h2>Added to cart:</h2>
                <h2>{cartCount} items</h2>
            </div>
        </div>
    )
}

export default Home;