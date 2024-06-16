
import './cart-item.scss'

export function CartItem(){
    return(
        <div className='cart-item-container'>
            <img src="https://github.com/AndersonSantosFernandes/wineList/blob/main/branco_vegano%20freixenet.png?raw=true" alt="" />
            <div className='item-details'>
                <span className='name'>Produto 1</span>
                <span className='price'>4 x 5</span>
            </div>
            <span>2</span>
        </div>
        
    )
} 