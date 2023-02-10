import "../Navbar/Navbar.css"
import { Link } from "react-router-dom";

const CartWidget = ({qtty}) =>{ 
    return(
        <Link to='/cart' className="widget"> 
            <img src="./images/shopping-cart.svg" alt="cart-widget"/>
            <span>{qtty}</span>
        </Link>
    )
}

export default CartWidget;