
import { Button } from "../button/button"
import { CartItem } from "../cart-item/cart-item"
import "./cart-dropdown.scss"

export function CartDropdown(){

return(

<div className="cart-dropdown-container">
    <div className="cart-items">
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </div>
    <Button>Checkout</Button>
</div>

)

}
