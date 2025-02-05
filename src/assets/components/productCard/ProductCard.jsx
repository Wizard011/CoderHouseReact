export default function ProductCard (product) {

    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <img src={product.product.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.product.name}</h5>
                    <h5>{product.product.price}</h5>
                    <p className="card-text">{product.product.description}</p>
                    <a href="#" className="btn btn-primary">Ver más...</a>
                </div>
            </div>
        </>
    )
}