import './Title.css';

export default function Title (props){
    return (
        <div className="containerTitle">
            <h1 className='title'>{props.title ? props.title : 'Falta ingresar un titulo'}</h1>
        </div>
    )
}