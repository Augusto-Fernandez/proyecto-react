import "./ItemDetail.css"
import { useState, useContext } from "react"; 
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, price, category, description, stock}) => {
    const [quantity, setQuantity] = useState(0) 
    const {addItem} = useContext(CartContext) 

    const handleOnAdd = (qtty) =>{ 
        setQuantity(qtty) 
        addItem({id, name, qtty, price}) 
    }
    
    return(
        <div style={{backgroundColor:'#6aa4c2', marginLeft:"400px", marginRight:"400px", borderRadius:"15px"}}>
            <h1 className="item_name_detail">{name}</h1>
            <p>{category}</p>
            <img className="item_detail_image" src={img} alt={name}/>
            <p className="item_detail_price">${price}</p>
            <p>Descripción: {description}</p>
            {
                quantity > 0 ? (
                    <Link style={{textDecoration:'none'}} to='/checkout'><button style={{border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', width:'150px', color:'white', fontSize:'16px'}}>Terminar Compra</button></Link>
                ):(
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </div> 
    )
}

export default ItemDetail;