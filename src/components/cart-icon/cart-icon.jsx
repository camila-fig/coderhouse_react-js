import {CartContext} from '../../context/cartContext'
import { useContext } from 'react'
import carrinho from '../../assets/shopping-cart.png'
import'./cart-icon.scss'

export function CartIcon() {


const {isCartOpen, setIsCartOpen} = useContext(CartContext)


const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-container' onClick={toggleIsCartOpen}>
            <p className='cart-text'>Carrinho</p>
            <img className='cart-icon' src={carrinho} alt="Carrinho de compras" />
            <span className='item-count'>10</span>
        </div>
    )
} 