import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../../../asyncMock";
import Spinner from "../spinner/Spinner";
import './ProductDetail.css'

export default function ProductDetail () {

    const slugParams = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProductBySlug(slugParams.product)
            .then(response => setProduct(response))
            .finally(() => setLoading(false));
    }, [slugParams]);
    
    return (
        loading ? (
            <Spinner />
        ) : (
            <div className="containerProductDetail">
                <div className="row">
                        {product&& (<>
                            <div className="col-7">
                                <div className="containerImgProdruct">
                                    <img src={product.img} alt={product.name} />
                                </div>
                            </div>
                            <div className="col-5">
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <h3>${product.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>


                                <button className="btn btn-secondary">Agregar al carrito</button>
                            </div>
                        </>
                        )}
                </div>
            </div>
        )
    );
}