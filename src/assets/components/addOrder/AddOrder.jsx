import './AddOrder.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

export default function AddOrder (){

    const [orderId, setOrderId] = useState(null);
    const { cart, setCart } = useContext(CartContext);

    return(
        <div className="container containerTag">
            <div className="row">
                <div className="col-12">
                    <div className="containerOrder">
                        <h2>Resumen de compra</h2>
                        {cart?.length > 0 ? (
                            cart.map(cartProduct => (
                                <div key={cartProduct.id}>
                                    <p>{cartProduct.name} X {cartProduct.quantity}</p>
                                </div>
                            ))
                        ) : (
                            <>
                                <p>No hay productos en el carrito</p>
                                <Link to={'/'} className='btn btn-secondary'>Volver</Link>
                            </>
                        )}

                     
                    </div>
                </div>
            </div>
        </div>
    )
}