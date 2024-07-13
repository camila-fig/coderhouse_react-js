import './empty-cart.scss'
import emptycart from '../../assets/emptyCart.png'

export function EmptyCart() {

    return(
        <div className="img-empty-car">
            <img className='empty-cart-image' src={emptycart} alt="Carrinho vazio" />
            <p className='empty-cart-text'>Seu carrinho está vazio</p>
        </div>
    )
}