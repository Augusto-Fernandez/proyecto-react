import { useState } from "react";

const ItemCount = ({onAdd, stock}) =>{
    const [count,setCount] = useState(0)

    const increment = () =>{
        setCount(prev => prev +1)
    }

    const decrement = () =>{
        setCount(prev => prev -1)
    }

    const reset = () =>{
        setCount(0)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

/* export default ItemCount; */