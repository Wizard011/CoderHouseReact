import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css'

export default function NavBar ({buttonNavBar}){
    return (
        <nav>
            <div className="continerLogo">
                <img src="./img/logo.svg" alt="logo de Digital4Tech" />
            </div>
            <div className="containerButton">
                <ul>
                    {buttonNavBar.map((item, index) => (
                        <li key={index}>
                            <i className={item.icon}></i> {item.button}
                        </li>
                    ))}
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}
