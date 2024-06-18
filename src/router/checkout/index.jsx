 import './style.scss'
 import { useContext } from 'react'
 import { CartContext } from '../../context/cartContext'
import { CartItem } from '../../components/cart-item/cart-item'
import { CheckoutItem } from '../../components/checkout-item'

 export function Checkout(){

const {cartItems, cartTotal} = useContext(CartContext)
// console.log(cartItems)



    return(
        <div className='checout-container'>
            
            <span className='total-pay'>Valor total da compra: R$ {cartTotal},00</span>
            <br /><br />   
                    {

                cartItems.map((cartItem) => <CheckoutItem  cartItem={cartItem} key={cartItem.id}/>)
            }
            
        </div>
    ) 
 }