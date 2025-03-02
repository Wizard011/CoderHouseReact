import { useContext } from "react";
import Title from "../components/title/Title";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import './ItemCart.css';

export default function ItemCard({ product }) {
    const { cart, removeItem, clearCart, increaseQuantity, decreaseQuantity, calculateTotal} = useContext(CartContext);

    const handleClickCleanAll = () => {
        Swal.fire({
            title: "Seguro que quiere vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e31a52",
            cancelButtonColor: "#666666",
            confirmButtonText: "Si, vaciar carrito!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Carrito vacio!",
                    icon: "success",
                    customClass: {
                        confirmButton: "buttonPrincipal"
                    }
                });
                clearCart();
            }
        });
    };

    const handleIncrease = (id) => {
        const product = cart.find(item => item.id === id);
    
        if (product.quantity < product.stock) {
            increaseQuantity(id);
        } else {
            Swal.fire({
                title: "Stock insuficiente",
                text: `Solo quedan ${product.stock} unidades disponibles`,
                icon: "warning",
                confirmButtonColor: "#e31a52"
            });
        }
    };
    
    const handleDecrease = (id) => {
        const product = cart.find(item => item.id === id);

        if (product.quantity > 1) {
            decreaseQuantity(id, product.quantity - 1);
        }
    };
    
    const totalAmount = calculateTotal();

    const handleRemoveItem = (id) => {
        removeItem(id);
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
                <h5><strong>$ </strong>{product.price * quantity}</h5>
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
