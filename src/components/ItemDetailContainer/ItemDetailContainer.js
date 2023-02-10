import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {db} from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}); 
    const [loading, setLoading] = useState(true);
    const {productId} = useParams(); 

    useEffect(() => {
        (async() =>{ 
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
    }, [productId]); 

    if(loading){
        return(
            <h1>Cargando</h1>
        )
    }

    return(
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/> 
        </div>
    )
}

export default ItemDetailContainer;