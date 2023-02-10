import { useState, createContext } from "react";

export const CartContext = createContext({ 
    cart: [] 
})

export const CartProvider = ({children}) => { 
    const [cart, setCart] = useState([]) 

    const addItem = (productToAdd) =>{ 
        if(!isInCart(productToAdd.id)){ 
            setCart(prev => [...prev, productToAdd])
        }
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id) 
    }

    const GetTotalQuantity = () =>{ 
        let acc = 0;

        cart.forEach(prod => {
            acc+=prod.qtty
        })

        return acc
    }

    const totalQuantity = GetTotalQuantity() 

    const GetTotal = () => { 
        let total = 0;

        cart.forEach(prod => {
            total+=prod.qtty*prod.price
        })

        return total
    }

    const total = GetTotal() 

    const removeItem = (id) =>{
        const cartUpdated = cart.filter(prod => prod.id !== id) 
        setCart(cartUpdated) 
    }

    const clearCart = () =>{ 
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addItem, totalQuantity, total, removeItem, clearCart}}> 
            {children} 
        </CartContext.Provider>
    )
}
