/*6) crea CartWidget */
import "../Navbar/Navbar.css"
import { Link } from "react-router-dom";

const CartWidget = ({qtty}) =>{ /*70) pasa por prop la cantidad*/
    return(
        <Link to='/cart' className="widget"> {/*75) linkea hacia el componente Cart*/}
            <img src="./images/shopping-cart.svg" alt="cart-widget"/>
            <span>{qtty}</span>
        </Link>
    )
}

export default CartWidget;