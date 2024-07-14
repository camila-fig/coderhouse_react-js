import './style.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { CheckoutItem } from '../../components/checkout-item'
import { Footer } from "../../components/footer/footer"
import { UserContext } from '../../context/userContext'
import { NavLink } from 'react-router-dom'

export function Checkout() {

    const { cartItems, cartTotal } = useContext(CartContext)
    const { currentUser } = useContext(UserContext)

return (
    <>
{!currentUser &&
             <div className='checkout-container'>
                <p className='checkout-title'>Os produtos selecionados foram os seguintes:</p>
                {
                    cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
                }
                <div className='total-pay-container'>
                    <p className='total-pay'>Valor total da compra: R$ {cartTotal.toFixed(2).toString().replace(".", ",")}</p>
                    <NavLink to='/auth'>
                        <div className='btn-logar'>Entre na sua conta para finalizar o pedido ou cadastre-se</div>
                    </NavLink>
                </div>
            </div>
            }
            {currentUser &&
             <div className='checkout-container'>
                <p className='checkout-title'>Os produtos selecionados foram os seguintes:</p>
                {
                    cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
                }
                <div className='total-pay-container'>
                    <p className='total-pay'>Valor total da compra: R$ {cartTotal.toFixed(2).toString().replace(".", ",")}</p>
                    <button className='btn-total-pay'>Finalizar pedido</button>
                </div>
            </div>}
            <Footer />
        </>
    )
}