import "./Navbar.css"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="titulo">E-commerce</h1>
            <div>
                <Link className="categorias" to='/category/celular'>Celulares</Link>
                <Link className="categorias" to='/category/tablet'>Tablets</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;