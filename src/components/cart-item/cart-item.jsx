
import './cart-item.scss'

export function CartItem({ cartItem }) {

    const { name, quantity, imageUrl, price } = cartItem

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt="" />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x R$ {price},00</span>
            </div>
        </div>
    )
} 