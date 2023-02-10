import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs,collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { createProductsAdapterFromFirestore } from "../../adapters/ProductsAdapter";

const ItemListContainer = ({greeting}) =>{ 
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams(); 

    useEffect(() =>{
       (async() => { 
            setLoading(true) 

            const productsRef = categoryId 
                ? query(collection(db,'products'),where('category','==',categoryId)) 
                : collection(db,'products') 
            
            try{
                const snapshot = await getDocs(productsRef)
                const productsAdapted = snapshot.docs.map(doc =>{ 
                    return(createProductsAdapterFromFirestore(doc))
                })

                setProducts(productsAdapted) 
            } catch(error){
                console.log(error)
            }finally{
                setLoading(false) 
            }

       })()

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