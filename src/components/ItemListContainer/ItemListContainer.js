/* 2) crea ItemListContainer*/
/* 14) crea ItemListContainer*/
import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{ /* 3) le da el prop para el greeting */
    const [products, setProducts] = useState([]); /*15) este estado almacena la array de productos. El products corresponde al ItemList del JSX */
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams(); /*22) se usa para identificar que se encuentra parado en la ruta categoryId que definió en el path y obtener el identificador de la ruta*/

    useEffect(() =>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts; /*23) primero se fija mediante categoryId si está parado en la ruta de filtrado por categoria mediante getProductsByCategory o del caso contrario recibir todos los productos por getProducts */

        asyncFunction(categoryId) /*24) la función es asincrona porque lo que está trayendo es una promesa y por eso se usa then */
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() =>{
                setLoading(false)
            });
    }, [categoryId]); /*25) se escucha mal en la grabación porque lo puso así, por lo que entendí es porque un estado depende de otro, en este caso deponde de useParams */

    if(loading){
        return(
            <h1>Cargando</h1>
        )
    }
    
    return(
        <div>
            <h1 className="greeting">{greeting}</h1> {/*4) da como prop */}
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;