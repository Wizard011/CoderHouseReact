import { Link } from "react-router-dom";

export default function ProductCard (product) {

    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <img src={product.product.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.product.name}</h5>
                    <h5>{product.product.price}</h5>
                    <p className="card-text">{product.product.description}</p>
                    <Link className="btn btn-secondary" to={product.product.slug}>Ver más...</Link>
                </div>
            </div>
        </>
    )
}