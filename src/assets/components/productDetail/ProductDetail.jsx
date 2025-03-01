import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductBySlug } from "../../../firebase";
import Spinner from "../spinner/Spinner";
import './ProductDetail.css'
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2';

export default function ProductDetail () {

    const slugParams = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const {cart, setCart, addItem} = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
        getProductBySlug(slugParams.product)
            .then(response => setProduct(response))
            .finally(() => setLoading(false));
    }, [slugParams]);
    
    const navigate = useNavigate();

    const handleClick = () => {
        const productExists = cart.find(item => item.id === product.id);

        if (productExists) {
            Swal.fire({
                icon: 'warning',
                title: '¡Producto ya esta en el carrito!',
                text: 'Quieres ir al carrito?',
                showCancelButton: true,
                confirmButtonColor: "#e31a52",
                cancelButtonColor: "#666666",
                confirmButtonText: "Si, ir al carrito!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/carrito');
                }});      
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito!',
                text: 'Puedes verlo en el carrito.',
                customClass: {
                    confirmButton: "buttonPrincipal"
                }
            });
            addItem(product);
        }
    }
    
    return (
        loading ? (
            <Spinner />
        ) : (
            <div className="containerProductDetail">
                <div className="row">
                        {product&& (<>
                            <div className="col-7">
                                <div className="containerImgProdruct">
                                    <img src={`../${product.img}`} alt={product.name} />
                                </div>
                            </div>
                            <div className="col-5">
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <h3>${product.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>


                                <button className="btn btn-secondary" onClick={handleClick}>Agregar al carrito</button>
                            </div>
                        </>
                        )}
                </div>
            </div>
        )
    );
}