/* 2) crea ItemListContainer*/
/* 14) crea ItemListContainer*/
import "./ItemListContainer.css"
import { useEffect, useState } from "react";
/*import { getProducts, getProductsByCategory } from "../../asyncMock"; 88)*/
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs,collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) =>{ /* 3) le da el prop para el greeting */
    const [products, setProducts] = useState([]); /*15) este estado almacena la array de productos. El products corresponde al ItemList del JSX */
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams(); /*22) se usa para identificar que se encuentra parado en la ruta categoryId que definió en el path y obtener el identificador de la ruta*/

    useEffect(() =>{
        /* 88) borra el mock
            const asyncFunction = categoryId ? getProductsByCategory : getProducts; /*23) primero se fija mediante categoryId si está parado en la ruta de filtrado por categoria mediante getProductsByCategory o del caso contrario recibir todos los productos por getProducts 

            asyncFunction(categoryId) /*24) la función es asincrona porque lo que está trayendo es una promesa y por eso se usa then
                .then(products => {
                    setProducts(products);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() =>{
                    setLoading(false)
                }); 
        */
       (async() => { /*93) pone todo dentro de esta funcion porque no se puede retornar una promesa a useEffect. Al tener doble parentesis indica que es una función que se auto llama. Se le puede poner async porque no se va a guardar en el useEffect. EN CLASE LO HACE DISTINTO, USA GETDOCS() Y THEN()*/
            setLoading(true) /*89) esta función estaba dentro de la funcion del mock, la saca y la pone primera, lo cambió a true porque lo va a hacer false cuando se traiga los productos desde firebase*/

            /*const productsRef = collection(db,'products') 91) crea una referencia a la coleccion en la base de datos*/

            const productsRef = categoryId /*A101) este función filtra por categoria*/
                ? query(collection(db,'products'),where('category','==',categoryId)) /*A102) query toma una referencia a una colección, where trae los elementos con un campo en particular */
                : collection(db,'products') /*A103) del caso contrario trae la referencia de la colleción completa */
            
            try{
                const snapshot = await getDocs(productsRef)/*90) funcion que trae los documentos en la coleccion products*/
                /*92) obtiene la respuesta de getDocs y la hace asincrona porque hay que esperar la respuesta*/
                const productsAdapted = snapshot.docs.map(doc =>{ /*94) hace un array con la respuesta de snapshot*/
                    const fields = doc.data() /*95) obtiene los campos desde la data del documento*/

                    return{id: doc.id, ...fields}/*96) devuelve el id de documento mas los campos*/
                })

                setProducts(productsAdapted) /*97) lo setea en el estado */
            } catch(error){
                console.log(error)
            }finally{
                setLoading(false) /*98) pasa el loading a false */
            }

       })()

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