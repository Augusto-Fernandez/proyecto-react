import { useState } from "react";

const ItemCount = ({initial = 1 ,onAdd, stock}) =>{ 
    const [count,setCount] = useState(initial) 

    const increment = () =>{
        if(count<stock){ 
            setCount(prev => prev +1)
        }
    }

    const decrement = () =>{
        if(count>1){ 
            setCount(prev => prev -1)
        }
    }

    return(
        <div>
            <p>Cantidad: {count}</p> 
            <button style={{border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', width:'40px', color:'white', fontSize:'16px'}} onClick={increment}>+</button>
            <button style={{border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', width:'40px', color:'white', fontSize:'16px'}} onClick={decrement}>-</button>
            <button style={{border:'none', borderRadius:'5px', backgroundColor:'#0080c0', height:'40px', color:'white', fontSize:'16px'}} onClick={() => onAdd(count)}>Agregar al carrito</button> 
        </div>
    )
}

export default ItemCount;