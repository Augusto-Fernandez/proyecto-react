/*16) crea ItemList */
import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({products}) => { /*17) recibe productos por prop */
    return(
        <div className="item_display">
            {products.map(prod => <Item key={prod.id} {...prod}/>)} {/*18) lista productos */}{/*20) Hace por cada producto en el array creado por map, se cree un componente Item*/}
        </div>
    )
}

export default ItemList