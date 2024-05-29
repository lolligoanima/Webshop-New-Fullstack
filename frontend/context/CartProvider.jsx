import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItem, setCartItems] = useState([])

    return (
        <CartContext.Provider value={[cartItem, setCartItems]}>
            {children}
        </CartContext.Provider>
    )
}
