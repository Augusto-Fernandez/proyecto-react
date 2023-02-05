/*76) crea CartList para visualizar los productos en el carrito*/
import ItemCart from "../ItemCart/ItemCart"

const Cartlist = ({cart}) =>{
    return(
        <div>
            {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)} {/*77) trae los productos del carrito y los convierte en el componente ItemCart donde reciben id, name, price, etc*/}
        </div>
    )
}

export default Cartlist