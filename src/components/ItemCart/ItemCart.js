import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({id, name, qtty, price}) =>{

    const {removeItem} = useContext(CartContext) 

    return(
        <div style={{display:'flex', justifyContent:'space-around', backgroundColor:"#6aa4c2", margin:'10px', borderRadius:"8px"}}>
            <p>{name}</p>
            <p>Cantida: {qtty}</p>
            <p>Precio unidad: ${price}</p>
            <p>Subtotal: ${price*qtty}</p>
            <button style={{backgroundColor:"red", borderRadius:"8px", height:"52px", width:"52px", border:'none'}} onClick={() => removeItem(id)}>X</button> 
        </div>
    )
}

export default ItemCart