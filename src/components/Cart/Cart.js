/*74) crea componente Cart para mostrar lo que hay dentro del carrito*/
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Cartlist from "../CartList/CartList"

const Cart = () => {
    const {cart} = useContext(CartContext) /*76) trae los productos que hay en el carrito */
    
    return(
        <div>
            <h1>Productos en carrito</h1>
            <Cartlist cart={cart}/> {/*78) reciben por prop los productos almacenado en el context*/}
            {/*113A) Hice el condicional para que vea si el carrito esta vacio o no*/}
            {
                cart.length>0 ? (
                    <Link style={{textDecoration:'none'}} to='/checkout'><button style={{border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', width:'150px', color:'white', fontSize:'16px'}}>Terminar Compra</button></Link>
                ):(
                    <h2>No hay productos en carrito</h2>
                )
            }
        </div>
    )
}

export default Cart