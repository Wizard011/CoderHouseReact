import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../../../asyncMock";
import ProductCard from "../productCard/ProductCard";
import Spinner from "../spinner/Spinner";
import Title from "../title/Title";
import './ItemListContainer.css';

export default function ItemListContainer ({category, title}){
    
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);
        if (category) {
            getProductByCategory(category)
                .then(response => setProducts(response))
                .finally(() => setLoading(false));
        } else {   
            getProducts()
                .then(response => setProducts(response))
                .finally(() => setLoading(false));
        }   
    }, [category]);
    
    return (
        <>
            <Title title={title} />
            {loading ? (
                <Spinner />
            ) : (
                <div className="containerProduct">
                    {products?.map(product => <ProductCard product={product} key={product.id}/>)}
                </div>
            )}
        </>

    )
}