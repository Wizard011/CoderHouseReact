import './Spinner.css';

export default function Spinner(){
    return(
        <div className="containerSpinner">
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}