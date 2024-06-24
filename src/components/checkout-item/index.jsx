import './style.scss'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { IconMais, IconMenos, IconTrash } from '../icons/icons'



export function CheckoutItem({ cartItem }) {

    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const { name, imageUrl, price, quantity } = cartItem
    const clearItem = () => clearItemToCart(cartItem)
    const addItem = () => addItemToCart(cartItem)
    const removeItem = () => removeItemToCart(cartItem)
 
    return (

        <div className="checkout-item-container">
           
            <div className='img-box'>
                <img src={imageUrl} alt="" />
            </div>
           
            <span className='name-prod'>{name}</span>
           
            <span className='buttons-up-down'>
                <div onClick={removeItem}>
                    {/* &#10094; */}
                    <IconMenos/>
                </div>
                
                <span className='quantity'>{quantity}</span>

                <div onClick={addItem}>
                    {/* &#10095; */}
                    <IconMais/>
                </div>
            </span>
           
            <span className='price-prod'>R$ {price},00</span>
            <div className='remove-item' onClick={clearItem}>
                {/* &#10005; */}
                <IconTrash/>
            </div>
        </div>

    )


}