import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

const addCartItem = (cartItems, productToAdd) => {
    // verificar se produto existe no carrinho
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )
    //se encontrar, incrementar quantidade
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    //retornar um novo array com valor de cartIte modificado
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemRemove.id)
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(carItem => cartItem.id !== cartItemToClear.id) 

export const CartContext = createContext({
    // iniciar com o carrinho fechado
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItem: () => {},
    clearItemToCart: () => {},
    cartCount: 0

})

export const CartProvaider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setcartCount] = useState(0)
    const [cartTotal, setCartTotal] =useState(0)

    useEffect(() => {
        const newCarCount = cartItems.reduce((total, carItem) => total + carItem.quantity, 0)
        setcartCount(newCarCount)
    }, [cartItems])

   useEffect(() => {

    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(newCartCount)
   }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemToCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemToCart,
        clearItemToCart,
        cartTotal
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}