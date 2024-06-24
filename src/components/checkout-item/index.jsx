import './style.scss'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { IconMais, IconMenos, IconTrash } from '../icons/icons'

export function CheckoutItem({ cartItem }) {

    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const { name, imageUrl, price, quantity } = cartItem
<<<<<<< HEAD

    const addItem = () => addItemToCart(cartItem)
    const removeItem = () => removeItemToCart(cartItem)
    const clearItem = () => clearItemToCart(cartItem)

=======
    const clearItem = () => clearItemToCart(cartItem)
    const addItem = () => addItemToCart(cartItem)
    const removeItem = () => removeItemToCart(cartItem)
 
>>>>>>> 73e7b086a449fc8a6c9b5eea8a31cbd312221f3c
    return (
        <div className="checkout-item-container">
            <div className='img-box'>
                <img src={imageUrl} alt="" />
            </div>
            <span className='name-prod'>{name}</span>
            <span className='buttons-up-down'>
                <div onClick={removeItem}>
                    <IconMenos />
                </div>
                <span className='quantity'>{quantity}</span>
                <div onClick={addItem}>
                    <IconMais />
                </div>
            </span>
            <span className='price-prod'>R$ {price},00</span>
            <div className='remove-item' onClick={clearItem}>
                <IconTrash />
            </div>
        </div>
    )
}