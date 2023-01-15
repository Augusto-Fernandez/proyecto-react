import "./Navbar.css"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h1>E-commerce</h1>
            <div>
                <Link to='/category/celular'>Celulares</Link>
                <Link to='/category/tablet'>Tablets</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;