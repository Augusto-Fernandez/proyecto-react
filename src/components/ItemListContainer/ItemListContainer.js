import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() =>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() =>{
                setLoading(false)
            });
    }, [categoryId]);

    if(loading){
        return(
            <h1>Cargando</h1>
        )
    }
    
    return(
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;