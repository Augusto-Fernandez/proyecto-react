/*39) crea ItemCount  */
import { useState } from "react";

const ItemCount = ({initial = 1 ,onAdd, stock}) =>{ /*40) recibe como valor inicial 1*/ 
/*44) recibe stock desde ItemDetail*/
/*48) pasa onAdd como la funcion que tiene que recibir de ItemDetail */
    const [count,setCount] = useState(initial) /*41) estado que guarda el valor del contador. Si recibe otro valor va a pisar el valor inicial que se le dió por props*/

    const increment = () =>{
        if(count<stock){ /*45) permite sumar siempre que el valor del contador sea menor al stock */
            setCount(prev => prev +1)
        }
    }

    const decrement = () =>{
        if(count>1){ /*42) limita el valor a 1 para que no pase a 0 y números negativos*/
            setCount(prev => prev -1)
        }
    }

    return(
        <div>
            <p>Cantidad: {count}</p> 
            <button style={{border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', width:'40px', color:'white', fontSize:'16px'}} onClick={increment}>+</button>
            <button style={{border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', width:'40px', color:'white', fontSize:'16px'}} onClick={decrement}>-</button>
            <button style={{border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', color:'white', fontSize:'16px'}} onClick={() => onAdd(count)}>Agregar al carrito</button> {/*49) ejecuta onAdd con el valor que recibe de count */}
        </div>
    )
}

export default ItemCount;