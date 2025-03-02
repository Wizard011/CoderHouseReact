import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2';
import './ItemCart.css'

export default function ItemCart({ product }) {
    const { removeItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItem(product.id);
    };

    const handleIncrease = () => {
        if (product.quantity < product.stock) {
            increaseQuantity(product.id);
        } else {
            Swal.fire({
                title: "Stock insuficiente",
                text: `Solo quedan ${product.stock} unidades disponibles`,
                icon: "warning",
                confirmButtonColor: "#e31a52"
            });
        }
    };

    const handleDecrease = () => {
        if (product.quantity > 1) {
            decreaseQuantity(product.id);
        }
    };
    console.log(product.img);
    
    return (
        <div className="containerImgCartItem">
            <div className="row">
                <div className="col-6">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={product.img} className="card-img-top" alt={product.name} />
                        <button className='btn btn-danger' onClick={handleRemoveItem} style={{ width: '5rem' }}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="containerInfoCartItem">
                        <h4>{product.name}</h4>
                        <h5>Precio unitario: <strong>$ </strong>{product.price}</h5>
                        <h5>Sub Total: <strong>$ </strong>{product.price * product.quantity}</h5>
                        <div style={{ gap: '2rem' }}>
                            <button className='btn btn-outline-success' onClick={handleIncrease}>+</button>
                            <button className="btn">{product.quantity}</button>
                            <button className='btn btn-outline-danger' onClick={handleDecrease}>-</button>
                        </div>
                        <h6 style={{ marginTop: '1rem' }}>Stock disponible: {product.stock - product.quantity}</h6>
                    </div>
                </div>
                <div className='lineDiv'></div>
            </div>

        </div>
    );
}
