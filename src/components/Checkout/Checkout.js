import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {db} from "../../services/firebase/firebaseConfig"
import {query, where, collection, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"
import OrderList from "../OrderList/OrderList"

const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useContext(CartContext) 

    const [orderTotal, setOrderTotal] = useState('')

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    
    const createOrder = async () =>{ 
        setLoading(true)
        try{ 
            const objectOrder = { 
                buyer:{ 
                    name,
                    phone,
                    email
                },
                item: cart, 
                total, 
            }

            const batch = writeBatch(db) 

            const ids = cart.map(prod => prod.id) 
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids)) 

            const productsAddedFromCartFromFirestore = await getDocs(productsRef) 
            const {docs} = productsAddedFromCartFromFirestore 

            const outOfStock = []

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock 

                const productsAddedToCart = cart.find(prod => prod.id === doc.id) 
                const productsQuantity = productsAddedToCart.qtty 
                if(stockDb>=productsQuantity){ 
                    batch.update(doc.ref, {stock: stockDb-productsQuantity})
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc}) 
                }
            })
            if(outOfStock.length===0){ 
                await batch.commit() 
                const orderRef = collection(db, 'orders') 
                const orderAdded = await addDoc(orderRef, objectOrder) 
                const {id} =orderAdded 
                setOrderId(id)
                clearCart() 
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

    if(orderId){ 
        return(
            <div>
                <h1>El id de la compra es: {orderId}</h1>
                <h1>Total: ${orderTotal}</h1>
            </div>
        )
    }

    if(cart.length===0){ 
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
            <form style={{marginRight:'400px'}}>
                <div>
                    <input style={{width:'75%', margin:'10px 0px 10px 0px'}} type="text" value={name} placeholder="Ingresar nombre y apellido" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <input style={{width:'75%', margin:'10px 0px 10px 0px'}} type="number" value={phone} placeholder="Ingresar teléfono" onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div>
                    <input style={{width:'75%', margin:'10px 0px 10px 0px'}} type="email" value={email} placeholder="Ingresar email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <input style={{width:'75%', margin:'10px 0px 10px 0px'}} type="email" value={emailConfirm} placeholder="Confirmar email" onChange={(e) => setEmailConfirm(e.target.value)}/>
                </div>
                <div>
                    <button style={{marginRight:'585px', border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', width:'150px', color:'white', fontSize:'16px'}} onClick={handleSubmit} type="submit">Generar orden</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout