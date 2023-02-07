/*30) crea ItemDetailContainer  */
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/*import { getProductById } from "../../asyncMock"; 99)*/
import ItemDetail from "../ItemDetail/ItemDetail";
import {db} from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}); /*34) No le pone [] porque va a almacenar un objeto {} */
    const [loading, setLoading] = useState(true);
    const {productId} = useParams(); /*31) obtiene el producto de la url  */

    useEffect(() => {
        /*99) borra el mock
            getProductById(productId) /*32) usa el id del url
            .then(product =>{
                setProduct(product) /*35) setea el producto
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            });
        */
        (async() =>{ /*100) trae los productos de la misma manera que en ItemListContainer pero estaba vez usa getDoc porque trae un producto. Le indica productId para determinar que producto en la colección*/
            const productRef = doc(db, 'products', productId)

            try{
                const snapshot = await getDoc(productRef)

                const fields = snapshot.data()

                const productAdapted = {id:snapshot.id, ...fields}

                setProduct(productAdapted)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        })()
    }, [productId]); /*33) depende del estado useParams*/

    if(loading){
        return(
            <h1>Cargando</h1>
        )
    }

    return(
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/> {/*38) trae el detalle del item. Lo pone como spread porque las props del producto coinciden con las de asyncmock*/}
        </div>
    )
}

export default ItemDetailContainer;