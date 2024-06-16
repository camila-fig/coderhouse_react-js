import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

const addCartItem = (cartItems, productToAdd) => {
    // verificar se produto existe no carrinho
    const existingCartItem = cartItems.find(
       (cartItem) => cartItem.id === productToAdd.id 
    )
    //se encontrar, incrementar quantidade
    if(existingCartItem){
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
        ?{...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        )
    }
//retornar um novo array com valor de cartIte modificado
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    // iniciar com o carrinho fechado
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0

})

export const CartProvaider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setcartCount] = useState(0)

useEffect(() => {
const newCarCount = cartItems.reduce((total,  carItem) => total + carItem.quantity, 0)
setcartCount(newCarCount)
}, [cartItems])

console.clear()
console.log(cartItems)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }


    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart,
        cartCount
     }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}