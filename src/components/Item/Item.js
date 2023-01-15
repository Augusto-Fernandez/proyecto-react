import { Link } from "react-router-dom";

const Item = ({id, name, img, price}) =>{

    return(
        <div>
            <h4>{name}</h4>
            <img src={img} alt={name} style={{width: 100}}/>
            <p>$ {price}</p>
            <Link to={`/item/${id}`}>Ver detalles</Link> 
        </div>
    )
}

export default Item;