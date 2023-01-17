import "./ItemDetail.css"
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
            <h1 className="item_name_detail">{name}</h1>
            <p>{category}</p>
            <img className="item_detail_image" src={img} alt={name}/>
            <p className="item_detail_price">${price}</p>
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