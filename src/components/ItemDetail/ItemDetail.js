/*37) crea ItemDetail  */
import "./ItemDetail.css"
import { useState, useContext } from "react"; /*60) importa el hook que permite consumir el contexto */
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, price, category, description, stock}) => {
    const [quantity, setQuantity] = useState(0) /*47) en quantity guarda la cantidad de productos */
    const {addItem} = useContext(CartContext) /*65) trae el contexto */

    const handleOnAdd = (qtty) =>{ /*46) pone esta funcion fuera de ItemCount porque cuando cambia a Terminar compra se pierde el dato de la cantidad de productos*/
    /*50) qtty va a ser el count que se pasa en ItemCount*/
        setQuantity(qtty) /*51) setea la cantidad como el valor de count en ItemCount*/
        addItem({id, name, qtty, price}) /*66) llama a la funcion del context y le pasa un objeto que es el producto que está esperando el carrito porque esto es lo que va a usar para los calculos */
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
    /*43) pasa stock como prop al contador para poder evitar que se pidan mas productos de los que hay*/
    /*52) En caso de que quantity sea mayor que 0, manda al link de terminar compra o del caso contrario se renderiza el componente ItemCount*/
}

export default ItemDetail;