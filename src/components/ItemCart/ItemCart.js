/*79) crea ItemCart para visualizar los productos en el carrito*/
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({id, name, qtty, price}) =>{

    const {removeItem} = useContext(CartContext) /*84) trae la funcion para borrar items*/

    return(
        <div style={{display:'flex', justifyContent:'space-around', backgroundColor:"grey", margin:'10px'}}>
            <p>{name}</p>
            <p>Cantida: {qtty}</p>
            <p>Precio unidad: ${price}</p>
            <p>Subtotal: ${price*qtty}</p>
            <button style={{backgroundColor:"red"}} onClick={() => removeItem(id)}>Borrar</button> {/*80) crea un boton para remover productos*/}
        </div>
    )
}

export default ItemCart