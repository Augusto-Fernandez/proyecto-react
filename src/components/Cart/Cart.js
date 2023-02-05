/*74) crea componente Cart para mostrar lo que hay dentro del carrito*/
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Cartlist from "../CartList/CartList"

const Cart = () => {
    const {cart} = useContext(CartContext) /*76) trae los productos que hay en el carrito */
    
    return(
        <div>
            <h1>Productos en carrito</h1>
            <Cartlist cart={cart}/> {/*78) reciben por prop los productos almacenado en el context*/}
        </div>
    )
}

export default Cart