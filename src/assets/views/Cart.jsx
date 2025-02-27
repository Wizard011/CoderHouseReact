import { useContext } from "react";
import Title from "../components/title/Title";
import { CartContext } from "../../context/CartContext";

export default function Cart({ title }) {
    const { cart, clearCart } = useContext(CartContext);

    const handleClickCleanAll = () => {
        clearCart();
    };

    console.log(cart);

    return (
        <>
            <Title title={title} />
            <button className="btn btn-danger" onClick={handleClickCleanAll}>
                Eliminar Todo
            </button>
        </>
    );
}
