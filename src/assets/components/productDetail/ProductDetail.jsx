import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../../../asyncMock";
import Spinner from "../spinner/Spinner";

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
            <div>
                <h1>Product detail de: {slugParams.product}</h1>
            </div>
        )
    );
}