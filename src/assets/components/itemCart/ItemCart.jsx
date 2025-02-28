import { useState, useContext } from 'react';
import { CartContext } from "../../../context/CartContext";
import './ItemCart.css';

export default function ItemCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(product.stock - 1);

    const { cart, removeItem } = useContext(CartContext); // Asegúrate de que tengas `updateItem` en tu contexto

    const handleIncrease = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
            setStock(stock - 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setStock(stock + 1);
        }
    };

    const handleRemoveItem = () => {
        removeItem(product.id);
    };

    return (
        <>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={product.img} className="card-img-top" alt={product.name}/>
                <button className='btn btn-danger' onClick={handleRemoveItem} style={{width: '5rem'}}><i class="fa-solid fa-trash-can"></i></button>

            </div>
            <div className="containerInfoCartItem">
                <h4>{product.name}</h4>
                <h5><strong>$ </strong>{product.price * quantity}</h5> {/* Muestra el precio total por producto */}
                <div>
                    <button className='btn btn-success' onClick={handleIncrease}>+</button>
                    <button className='btn btn-dark' style={{width: '5rem'}}>{quantity}</button>
                    <button className='btn btn-danger' onClick={handleDecrease}>-</button>
                </div>
                <h6>Stock disponible: {stock}</h6>
            </div>
        </div>
        <div className='lineDiv'></div>
        </>
    );
}
