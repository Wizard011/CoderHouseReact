import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <div style={{textAlign: "center", marginTop: '10rem'}}>
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, pero la página que buscabas no fue encontrada.</p>
            <Link to='/'><button className="btn btn-secondary">Volver</button></Link>
        </div>
    )
}