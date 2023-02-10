/*19) crea Item */
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({id, name, img, price}) =>{

    return(
        <div className="item_div">
            <h4 className="item_name">{name}</h4>
            <img className="item_img" src={img} alt={name} style={{width: 100}}/>
            <p className="item_price">$ {price}</p>
            <Link style={{textDecoration:'none'}} to={`/item/${id}`}><p className="item_detail">Ver detalles</p></Link> {/*36) setea la url del componente al que se quiere ver detalle*/}
        </div>
    )
}

export default Item;