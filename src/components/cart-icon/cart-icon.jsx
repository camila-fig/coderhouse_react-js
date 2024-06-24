import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'
import carrinho from '../../assets/shopping-cart.png'
import './cart-icon.scss'

export function CartIcon() {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

<<<<<<< HEAD
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    console.log("valor no carrinho", cartCount)

    return (
        <div className='cart-container' onClick={toggleIsCartOpen} disabled={cartCount === 0}>
=======
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen) 
    console.log("valor no carrinho",cartCount)    

    return (
        <div className='cart-container' onClick={toggleIsCartOpen}  disabled={cartCount === 0}>
            {/* <p className='cart-text'>Carrinho</p> */}
>>>>>>> 73e7b086a449fc8a6c9b5eea8a31cbd312221f3c
            <div className="img-cart-count">
                <img className='cart-icon' src={carrinho} alt="Carrinho de compras" />
                <span className='item-count'>{cartCount}</span>
            </div>
        </div>
    )
} 