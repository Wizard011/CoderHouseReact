import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar ({buttonNavBar}){
    return (
        <nav>
            <div className="continerLogo">
                <Link to='/'>
                    <img src="../img/logo.svg" alt="logo de Digital4Tech" />
                </Link>
            </div>
            <div className="containerButton">
                <ul>
                    {buttonNavBar.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <li>
                                <i className={item.icon}></i> {item.button}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}
