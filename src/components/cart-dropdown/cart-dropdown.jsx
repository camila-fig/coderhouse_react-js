import "./cart-dropdown.scss"
import React from "react";
import { Button } from "../button/button"
import { CartItem } from "../cart-item/cart-item"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { useNavigate } from 'react-router-dom'
import { EmptyCart } from "../empty-cart/empty-cart";

export function CartDropdown() {

    const { cartItems, cartTotal } = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckout = () => {
        navigate('/checkout')
    }

    let onOffCheck = ''
    let onOffCart = ''

    if (cartItems.length == 0) {
        onOffCheck = 'none'
        onOffCart = 'block'
    } else {
        onOffCheck = 'block'
        onOffCart = 'none'
    }

    const divStyle = {
        display: onOffCheck,
    };
    const divCart = {
        display: onOffCart
    }

    // console.log('itens adicionados',cartItems.length)

    return (
        <div className="cart-dropdown-container">
            <div className="img-empty-cart" style={divCart}>
                <EmptyCart />
            </div>
            <div className="cart-items" style={divStyle}>
                {
                    cartItems.map(item => (
                        <CartItem cartItem={item} key={item.id} />
                    ))
                }
            </div>
            <Button onClick={goToCheckout} style={divStyle}>Checkout</Button>
            <br />
            <hr style={divStyle} />
            <span className='total-pay' style={divStyle}>Total: R$ {cartTotal},00</span>
        </div>
    )
}
