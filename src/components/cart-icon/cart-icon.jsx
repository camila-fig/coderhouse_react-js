import carrinho from '../../assets/shopping-cart.png'
import'./cart-icon.scss'

export function CartIcon() {
    return (
        <div className='cart-container'>
            <p className='cart-text'>Carrinho</p>
            <img className='cart-icon' src={carrinho} alt="Carrinho de compras" />
        </div>
    )
}