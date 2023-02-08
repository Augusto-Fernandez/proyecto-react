/*54) Crea el componente que va a proveer los datos del cart*/
import { useState, createContext } from "react";

export const CartContext = createContext({ 
    cart: [] /*55) es el valor con el que se inicia el context, es el valor que ven los otros componentes que no estan envueltos por este context. Se pone un array vacio por si algún componente fuera del context toma el valor porque de estar vacio tomaría null y se rompe el código. Los valores serán reemplazados por los valores del provider */
})

export const CartProvider = ({children}) => { /*57) se inyecta a los componentes un objeto con valores, en este caso va a ser los valores del carrito */
    const [cart, setCart] = useState([]) /*58) crea un estado que almacene los valores de carrito */

    const addItem = (productToAdd) =>{ /*61) funcion que agrega productos al carrito */
        if(!isInCart(productToAdd.id)){ /*62) si no se encuentra en el carrito, con setCart agrega suma el producto a los que ya se encontraban ahí */
            setCart(prev => [...prev, productToAdd])
        }
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id) /*63) con some devuelve true o false para saber si el producto se encuentra en el carrito */
    }

    const GetTotalQuantity = () =>{ /*67) funcion que calcula cantidad*/
        let acc = 0;

        cart.forEach(prod => {
            acc+=prod.qtty
        })

        return acc
    }

    const totalQuantity = GetTotalQuantity() /*68) almacena el valor de GetTotalQuantity en esta variable*/

    const GetTotal = () => { /*109) crea función que calcula total*/
        let total = 0;

        cart.forEach(prod => {
            total+=prod.qtty*prod.price
        })

        return total
    }

    const total = GetTotal() /*110) almacena el valor del total */

    const removeItem = (id) =>{
        const cartUpdated = cart.filter(prod => prod.id !== id) /*81) filtra todos los elementos que no corresponden al id*/
        setCart(cartUpdated) /*82) actualiza el carrito*/
    }

    const clearCart = () =>{ /*131) crea la función para limpiar el carrito una vez que se genero la orden*/
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addItem, totalQuantity, total, removeItem, clearCart}}> {/*64) pasa la función como parametro*/} {/*69) comparte la cantidad total*/}{/*83) comparte la funcion para borrar productos*/}
            {children} {/*56) envuelve a los componentes que se le quiere inyectar la dependencia */}
        </CartContext.Provider>
    )
}
