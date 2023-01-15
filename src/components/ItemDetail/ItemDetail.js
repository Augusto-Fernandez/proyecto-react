import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, img, price, category, description, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (qtty) =>{
        setQuantity(qtty)
    }
    
    return(
        <div>
            <h1>{name}</h1>
            <p>{category}</p>
            <img src={img} alt={name}/>
            <p>${price}</p>
            <p>Descripción: {description}</p>
            {
                quantity > 0 ? (
                    <Link>Terminar Compra</Link>
                ):(
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </div>
    )
}

export default ItemDetail;