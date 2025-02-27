import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import './CartWidget.css'
import { Link } from 'react-router-dom';

export default function CartWidget(){

    const {cart, setCart} = useContext(CartContext);

    return (
        <div className="containerCartWidget">
            <Link to='/carrito'>
                <div className="containerNumberCart">
                    {cart.length}
                </div>
                <img src="../img/icons/shop.svg" alt="Icono de Carrito" />
            </Link>
        </div>
    )
}