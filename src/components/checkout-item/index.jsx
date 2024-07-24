import './style.scss'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import trash from '../../assets/bin.png'
import mais from '../../assets/mais.png'
import menos from '../../assets/menos.png'

export function CheckoutItem({ cartItem }) {

    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const { name, imageUrl, price, quantity } = cartItem

    const clearItem = () => clearItemToCart(cartItem)
    const addItem = () => addItemToCart(cartItem)
    const removeItem = () => removeItemToCart(cartItem)

    const subtotal = price*quantity

    let display_trash = ''
    let display_remove = ''

    if(quantity <= 1){
        display_trash = 'block'
        display_remove = 'none'
    }else{
         display_trash = 'none'
        display_remove = 'block'
    }
    const trash1 = {
        display: display_trash
    }
    const remove1 = {
        display: display_remove
    }

    return (
        <div className="checkout-item-container">
            <div className='img-box'>
                <img className='img-product' src={imageUrl} alt="Imagem do produto" />
            </div>
            <span className='name-prod'>{name}</span>
            <span className='buttons-up-down'>

            {/* botão deletar item independente da quantidade */}
            <div style={trash1} className='remove-item' onClick={clearItem}>
                <img className='icon-trash' src={trash} alt="Deletar produto" />
            </div>

            {/* Botão remover item por vez */}
                <div style={remove1} onClick={removeItem}>
                    <img className='icon-mais-menos' src={menos} alt="Reduzir quantidade" />
                </div>
                <span className='quantity'>{quantity}</span>

                {/* Botão adicionar ítem por vez */}
                <div onClick={addItem}>
                    <img className='icon-mais-menos' src={mais} alt="Acrecentar quantidade" />
                </div>
            </span>
            <span className='price-prod'>R$ {subtotal.toFixed(2).toString().replace(".", ",")}</span>
           
        </div>
    )
}