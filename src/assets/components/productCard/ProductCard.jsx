import { Link } from "react-router-dom";
import './ProductCard.css';

export default function ProductCard (product) {
    
    return (
        <Link to={`/producto/${product.product.slug}`}>
            <div className="card containerTag" style={{width: "20rem", border: 'none'}}>
                <img src={product.product.img} className="card-img-top" alt={product.product.name}/>
                <div className="card-body">
                    <h5 className="card-title">{product.product.name}</h5>
                    <h5>${product.product.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h5>
                    <p className="card-text">{product.product.description}</p>
                    <p>Stock disponible: <strong>{product.product.stock}</strong></p>
                    <button className="btn btn-secondary">Ver más...</button>
                </div>
            </div>
        </Link>
    )
}