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
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;