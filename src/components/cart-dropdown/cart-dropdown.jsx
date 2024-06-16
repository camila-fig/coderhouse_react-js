
import { Button } from "../button/button"
import { CartItem } from "../cart-item/cart-item"
import { useContext } from "react"
import {CartContext} from "../../context/cartContext"
import "./cart-dropdown.scss"

export function CartDropdown(){

const {cartItems} = useContext(CartContext)

return(

<div className="cart-dropdown-container">
    <div className="cart-items">
       
       {
        cartItems.map( item => (
            <CartItem cartItem={item} key={item.id}/>
        ))
       }
    </div>
    <Button>Checkout</Button>
</div>

)

}
