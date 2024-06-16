import { useState } from "react"
import { createContext } from "react"


export const CartContext = createContext({
    // iniciar com o carrinho fechado
    isCartOpen: false,
    setIsCartOpen: () => {}
})

export const CartProvaider = ({children}) => {
    const[isCartOpen, setIsCartOpen] = useState(false)

    const value = {isCartOpen, setIsCartOpen}

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}