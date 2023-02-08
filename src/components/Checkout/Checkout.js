/*105) se crea checkout */
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {db} from "../../services/firebase/firebaseConfig"
import {query, where, collection, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"

const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useContext(CartContext) /*107) trae a cart porque es donde están guardados los productos*/
    
    const createOrder = async () =>{ /*114) crea funcion que hace ordenes y mete el objectOrder adentro para que se genere cuando se pida la orden*/
        setLoading(true)
        try{ /*130) le pidieron que haga un loading al generar la orden*/
            const objectOrder = { /*106) crea el objeto de la orden */
                buyer:{ 
                    name: 'El pedo 2011',
                    phone: '1234567890',
                    email:'pussydestroyer2014@gmail.com'
                },
                item: cart, /*108) pone los productos en la orden*/
                total, /*111) recibe el valor del total de los productos sumados */
            }

            const batch = writeBatch(db) /*123) acá es donde se guardan las funciones de actualización*/

            const ids = cart.map(prod => prod.id) /*115) obtiene los id de firestore de los productos en carrito*/
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids)) /*116) crea una refencia, con query hace una busqueda filtrada en la base de datos, con where filtra los productos que estén dentro de ids, con documentId() accede a los id de firestore para poder hacer el filtrado*/

            const productsAddedFromCartFromFirestore = await getDocs(productsRef) /*117) hace la función asincrona que espera y recibe los datos de los productos filtrados en productsRef*/
            const {docs} = productsAddedFromCartFromFirestore /*118) accede a los documentas de la respuesta*/

            const outOfStock = []

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock /*119) accede al stock de la base datos*/

                const productsAddedToCart = cart.find(prod => prod.id === doc.id) /*120) valida que los productos en el carrito sean los mismo que los que se recibió por respuesta*/
                const productsQuantity = productsAddedToCart.qtty /*121) cantidad de productos que agregó el usuario al carrito*/
                if(stockDb>=productsQuantity){ /*122) si se cumple esta condición se actualiza el stock*/
                    batch.update(doc.ref, {stock: stockDb-productsQuantity})/*124) actualiza el documento con el nuevo stock, se pasa ref que refencia la documento donde se está trabajando y despues le pasa el nuevo stock*/
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc}) /*125) en un array vacío almacena los productos sin stock, esto se puede usar para dar alguna alera de que no hay productos*/
                }
            })
            if(outOfStock.length===0){ /*126) si no hay productos fuera de stock */
                await batch.commit() /*127) actualiza los stock*/
                const orderRef = collection(db, 'orders') /*128) una nueva colección*/
                const orderAdded = await addDoc(orderRef, objectOrder) /*129) agrega la nueva orden con el objeto que se hizo al principio de la función*/
                const {id} =orderAdded /*obtiene el id de la orden */
                setOrderId(id)/*133) guarda el id */
                console.log(id)
                clearCart() /*132) limpia el carrito*/
            }else{
                console.error('Hay productos fuera de stock')
            } 
        }catch(error){
            console.error(error)
        }finally{
            setLoading(false)
        }        
    }

    if(loading){
        return(
            <h1>Generando orden</h1>
        )
    }

    if(orderId){ /*134) da el id de la compra*/
        return(
            <div>
                <h1>El id de la compra es: {orderId}</h1>
            </div>
        )
    }

    if(cart.length===0){ /*135) valida que haya productos en el carrito para generar orden*/
        return(
            <h1>No hay productos en el carrito</h1>
        )
    }

    return(
        <div>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default Checkout