import { useContext } from "react";
import Title from "../components/title/Title";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

export default function Cart({ title }) {
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
            <Title title={title} />
            {cart.length > 0 ? 
               ( <div className="containerItemCart containerTag">
                    <div className="row">
                        <div className="col-7">
                            <div className="containerImgCartItem">
                                {cart?.map(cartProduct => (
                                    
                                    <div key={cartProduct.id} >
                                        <div className="row">
                                            <div className="col-7">
                                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                    <img src={cartProduct.img} className="card-img-top" alt={cartProduct.name}/>
                                                    <button className='btn btn-danger' onClick={() => handleRemoveItem(cartProduct.id)} style={{width: '5rem'}}><i className="fa-solid fa-trash-can"></i></button>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="containerInfoCartItem">
                                                    <h4>{cartProduct.name}</h4>
                                                    <h5>Precio unitario: <strong>$ </strong>{cartProduct.price}</h5>
                                                    <h5>Sub Total: <strong>$ </strong>{cartProduct.price * cartProduct.quantity}</h5>
                                                    <div style={{gap:'2rem'}}>
                                                        <button className='btn btn-outline-success' onClick={() => handleIncrease(cartProduct.id)}>+</button>
                                                        <button className="btn">{cartProduct.quantity}</button>
                                                        <button className='btn btn-outline-danger' onClick={() => handleDecrease(cartProduct.id)}>-</button>
                                                    </div>
                                                    <h6 style={{marginTop: '1rem'}}>Stock disponible: {cartProduct.stock - cartProduct.quantity}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lineDiv'></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="containerTotalCart">
                                <h3>Total de la Compra:</h3>
                                <h2>${totalAmount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
                                <Link to={'/chechout'}><button className="btn btn-success">Confirmar Compra</button></Link>
                                <button className="btn btn-danger" onClick={handleClickCleanAll}>Vaciar Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>)
                : 
                (<div style={{textAlign: "center", marginTop: '10rem'}}>
                    <h3>El carrito esta vacio!</h3>
                </div>)
            }
        </>
    );
}
