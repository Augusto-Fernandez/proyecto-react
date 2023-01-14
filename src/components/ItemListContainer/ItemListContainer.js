import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { getProducts } from "../../Stock";
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
            {products.map(prod => <h4 key={prod.id}>{prod.name}</h4>)}
        </div>
    );
}

export default ItemListContainer;