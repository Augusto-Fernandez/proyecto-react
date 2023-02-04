/*6) crea CartWidget */
import "../Navbar/Navbar.css"

const CartWidget = () =>{
    return(
        <div className="widget">
            <img src="./images/shopping-cart.svg" alt="cart-widget"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget;