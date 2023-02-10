import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Navbar = () => {
    const navigate = useNavigate() 
    const {totalQuantity} = useContext(CartContext) 

    return (
        <nav className="navbar">
            <h1 className="titulo" onClick={() => navigate('/')}>E-commerce</h1> 
            <div>
                <Link className="categorias" to='/category/guitarra'>Guitarras</Link> 
                <Link className="categorias" to='/category/bajo'>Bajos</Link>
            </div>
            <CartWidget qtty={totalQuantity}/> 
        </nav>
    )
}

export default Navbar;