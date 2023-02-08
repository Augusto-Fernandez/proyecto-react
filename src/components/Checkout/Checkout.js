/*105) se crea checkout */
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () =>{

    const {cart, total} = useContext(CartContext) /*107) trae a cart porque es donde están guardados los productos*/

    const objectOrder = { /*106) crea el objeto de la orden */
        buyer:{ 
            name: 'El pedo 2011',
            phone: '1234567890',
            email:'pussydestroyer2014@gmail.com'
        },
        item: cart, /*108) pone los productos en la orden*/
        total, /*111) recibe el valor del total de los productos sumados */
    }

    return(
        <div>
            <h1>Checkout</h1>
        </div>
    )
}

export default Checkout