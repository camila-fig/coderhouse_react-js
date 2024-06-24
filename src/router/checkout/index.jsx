 import './style.scss'
 import { useContext } from 'react'
 import { CartContext } from '../../context/cartContext'
import { CartItem } from '../../components/cart-item/cart-item'
import { CheckoutItem } from '../../components/checkout-item'
import { EmptCart } from '../../components/cart-icon/cart-icon'

 export function Checkout(){

const {cartItems, cartTotal} = useContext(CartContext)
console.log('cart items',cartItems.length)

let resposta = ''
if(cartItems.length == 0 ){
 resposta = <EmptCart/>
}else{
 resposta = `Valor total da compra: R$ ${cartTotal},00`
}
    return(
        <div className='checout-container'>
            
            <span className='total-pay'>{resposta}</span>
            <br /><br />   
                    {

                cartItems.map((cartItem) => <CheckoutItem  cartItem={cartItem} key={cartItem.id}/>)
            }
            
        </div>
    ) 
 }