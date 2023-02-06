/* 1) crea navbar */
/* 26) crea navbar */
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Navbar = () => {
    const navigate = useNavigate() /* yo le hice la vuelta al home */
    const {totalQuantity} = useContext(CartContext) /*71) se trae el contexto con el monto total */

    return (
        <nav className="navbar">
            <h1 className="titulo" onClick={() => navigate('/')}>E-commerce</h1> {/* */}
            <div>
                <Link className="categorias" to='/category/guitarra'>Guitarras</Link> {/* 27) linkea los botones para que filtren categorias, este esa la url que se recibe en useParams */}
                <Link className="categorias" to='/category/bajo'>Bajos</Link>
            </div>
            <CartWidget qtty={totalQuantity}/> {/*72) se pasa el prop que necesita el CartWidget para visualizarlo */}
        </nav>
    )
}

export default Navbar;