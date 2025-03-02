import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../../firebase";
import Spinner from "../spinner/Spinner";
import './ProductDetail.css'
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2';

export default function ProductDetail () {

    const slugParams = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const {cart, addItem} = useContext(CartContext);    

    useEffect(() => {
        setLoading(true);
        getProductBySlug(slugParams.product)
            .then(response => setProduct(response))
            .finally(() => setLoading(false));
    }, [slugParams]);

    const handleClick = () => {
        const productExists = cart.find(item => item.id === product.id);

        if (productExists) {
            Swal.fire({
                icon: 'warning',
                title: '¡Producto ya esta en el carrito!',
                text: 'Quieres agregar otro?',
                showCancelButton: true,
                confirmButtonColor: "#e31a52",
                cancelButtonColor: "#666666",
                confirmButtonText: "Si, agregar otros!"
            }).then((result) => {
                if (result.isConfirmed) {
                    addItem(product);
                    Swal.fire ({
                        icon: 'success',
                        title: 'Producto agregado al carrito!',
                        customClass: {
                            confirmButton: "buttonPrincipal"
                        }
                    })

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
            <div className="containerProductDetail containerTag">
                <div className="row">
                        {product&& (<>
                            <div className="col-6">
                                <div className="containerImgProdruct">
                                    <img src={`../${product.img}`} alt={product.name} />
                                </div>
                            </div>
                            <div className="col-6" style={{display: 'flex', alignItems: 'center'}}>
                                <div className="containerInfoDetail">
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <div className="lineDiv"></div>
                                    <h3>Precio: ${product.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>

                                    <h5>Stock disponible: {product.stock}</h5>
                                    {product.stock > 0 ? (
                                        <button className="btn buttonPrincipal" onClick={handleClick}>Agregar al carrito</button>
                                    ):(
                                        <button className="btn btn-secondary" disabled>Agotado</button>
                                    )}
                                </div>
                            </div>
                        </>
                        )}
                </div>
            </div>
        )
    );
}