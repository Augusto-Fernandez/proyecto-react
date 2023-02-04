/* 1) crea navbar */
/* 26) crea navbar */
import "./Navbar.css"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="titulo">E-commerce</h1>
            <div>
                <Link className="categorias" to='/category/celular'>Celulares</Link> {/* 27) linkea los botones para que filtren categorias, este esa la url que se recibe en useParams */}
                <Link className="categorias" to='/category/tablet'>Tablets</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;