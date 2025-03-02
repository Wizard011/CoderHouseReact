import { useContext } from "react";
import Title from "../components/title/Title";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import ItemCart from "../components/itemCart/ItemCart";

export default function Cart({ title }) {
    const { cart, clearCart, calculateTotal } = useContext(CartContext);
    const totalAmount = calculateTotal();

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

    return (
        <>
            <Title title={title} />
            {cart.length > 0 ? 
                <div className="containerItemCart containerTag">
                    <div className="row">
                        <div className="col-7">
                            {cart.map(cartProduct => (
                                <ItemCart key={cartProduct.id} product={cartProduct} />
                            ))}
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
                </div>
                :
                <div style={{ textAlign: "center", marginTop: '10rem' }}>
                    <h3>El carrito está vacío!</h3>
                </div>
            }
        </>
    );
}
