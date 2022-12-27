import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h1>E-commerce</h1>
            <div>
                <button>Celulares</button>
                <button>Computadoras</button>
                <button>Tablets</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;