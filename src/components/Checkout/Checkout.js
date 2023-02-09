/*105) se crea checkout */
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {db} from "../../services/firebase/firebaseConfig"
import {query, where, collection, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"
import OrderList from "../OrderList/OrderList"

const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useContext(CartContext) /*107) trae a cart porque es donde están guardados los productos*/

    const [orderTotal, setOrderTotal] = useState('')

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    
    const createOrder = async () =>{ /*114) crea funcion que hace ordenes y mete el objectOrder adentro para que se genere cuando se pida la orden*/
        setLoading(true)
        try{ /*130) le pidieron que haga un loading al generar la orden*/
            const objectOrder = { /*106) crea el objeto de la orden */
                buyer:{ 
                    name,
                    phone,
                    email
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
                clearCart() /*132) limpia el carrito*/
                setOrderTotal(objectOrder.total)
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
                <h1>Total: ${orderTotal}</h1>
            </div>
        )
    }

    if(cart.length===0){ /*135) valida que haya productos en el carrito para generar orden*/
        return(
            <h1>No hay productos en el carrito</h1>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || phone === '' || emailConfirm === '') {
            alert("Todos los campos son obligatorios")
        } else if (email !== emailConfirm) {
            alert("Las direcciones de email no coinciden")
        } else {
            createOrder();
        }

    };

    return(
        <div>
            <h2>Detalle de compra</h2>
            <OrderList cart={cart}/>
            <h2>Confirmar compra</h2>
            <form>
                <input type="text" value={name} placeholder="Ingresar nombre y apellido" onChange={(e) => setName(e.target.value)}/>
                <input type="number" value={phone} placeholder="Ingresar teléfono" onChange={(e) => setPhone(e.target.value)}/>
                <input type="email" value={email} placeholder="Ingresar email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="email" value={emailConfirm} placeholder="Confirmar email" onChange={(e) => setEmailConfirm(e.target.value)}/>
                <button onClick={handleSubmit} type="submit">Generar orden</button>
            </form>
        </div>
    )
}

export default Checkout