import { useContext, useEffect, useState } from "react";
import Title from "../components/title/Title";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'
import ItemCard from "../components/itemCart/ItemCart";

export default function Cart({ title }) {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    const [quantities, setQuantities] = useState({});
    const [totalSum, setTotalSum] = useState(0);

    useEffect(() => {
        const initialQuantities = cart.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [cart]);

    useEffect(() => {
        const total = cart.reduce((sum, cartProduct) => {
            const quantity = quantities[cartProduct.id] || 1;
            return sum + cartProduct.price * quantity;
        }, 0);
        setTotalSum(total);
    }, [cart, quantities]);

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
        setQuantities(prevQuantities => {
            const newQuantity = prevQuantities[id] + 1;
            const product = cart.find(item => item.id === id);
            
            if (newQuantity <= product.stock) {
                return { ...prevQuantities, [id]: newQuantity };
            } else {
                Swal.fire({
                    title: "Stock insuficiente",
                    text: `Solo quedan ${product.stock} unidades disponibles`,
                    icon: "warning",
                    confirmButtonColor: "#e31a52"
                });
                return prevQuantities;
            }
        });
    };
    

    const handleDecrease = (id) => {
        if (quantities[id] > 1) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [id]: prevQuantities[id] - 1
            }));
        }
    };

    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    return (
        <>
            <Title title={title} />
            {cart.length > 0 ? 
                <div className="containerItemCart">
                    <div className="row">
                        <div className="col-7">
                            <div className="containerImgCartItem">
                                {cart?.map(cartProduct => (
                                    <>
                                    <div key={cartProduct.id} className="row">
                                        <div className="col-7">
                                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                <img src={cartProduct.img} className="card-img-top" alt={cartProduct.name}/>
                                                <button className='btn btn-danger' onClick={() => handleRemoveItem(cartProduct.id)} style={{width: '5rem'}}><i className="fa-solid fa-trash-can"></i></button>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="containerInfoCartItem">
                                                <h4>{cartProduct.name}</h4>
                                                <h5><strong>$ </strong>{cartProduct.price * (quantities[cartProduct.id] || 1)}</h5>
                                                <div>
                                                    <button className='btn btn-success' onClick={() => handleIncrease(cartProduct.id)}>+</button>
                                                    <button className='btn btn-dark' style={{width: '5rem'}}>{quantities[cartProduct.id] || 1}</button>
                                                    <button className='btn btn-danger' onClick={() => handleDecrease(cartProduct.id)}>-</button>
                                                </div>
                                                <h6>Stock disponible: {cartProduct.stock - (quantities[cartProduct.id] || 1)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='lineDiv'></div>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="containerTotalCart">
                                <h3>Total:</h3>
                                <h2>${totalSum.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
                                <button className="btn btn-danger" onClick={handleClickCleanAll}>Vaciar Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <div style={{textAlign: "center", marginTop: '10rem'}}>
                    <h3>El carrito esta vacio!</h3>
                </div>
            }
        </>
    );
}
