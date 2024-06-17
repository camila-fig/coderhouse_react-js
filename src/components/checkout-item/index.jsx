import './style.scss'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"



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
           
            <span>{name}</span>
           
            <span className='buttons-up-down'>
                <div onClick={removeItem}>
                    &#10094;
                </div>
                <span>{quantity}</span>
                <div onClick={addItem}>
                    &#10095;
                </div>
            </span>
           
            <span>{price}</span>
            <div onClick={clearItem}>
                &#10005;
            </div>
        </div>

    )


}