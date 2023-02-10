import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Cartlist from "../CartList/CartList"

const Cart = () => {
    const {cart} = useContext(CartContext) 
    
    return(
        <div>
            <h1>Productos en carrito</h1>
            <Cartlist cart={cart}/> 
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