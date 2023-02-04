/*30) crea ItemDetailContainer  */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}); /*34) No le pone [] porque va a almacenar un objeto {} */
    const [loading, setLoading] = useState(true);
    const {productId} = useParams(); /*31) obtiene el producto de la url  */

    useEffect(() => {
        getProductById(productId) /*32) usa el id del url*/
            .then(product =>{
                setProduct(product) /*35) setea el producto*/
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            });
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