import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
/* <h1 className="greeting">{greeting}</h1> */

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getProducts()
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    
    return(
        <div>
            <h1>Sample</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;