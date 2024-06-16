
import "./product-card.scss"
import { ItemCount } from "../item-count/item-count"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
export function ProductCard({product}){

    const {name, price, imageUrl} = product
const { addItemToCart } = useContext(CartContext)

const addProductToCart = () => addItemToCart(product)

    return(
        <div className="wine-image-product-card">
            <img src={imageUrl} alt={`${name}`} />
            <div className="datas-wine">
                <span className="name-wine">{name}</span>
                <br />
                <span className="price-wine">{`R$ ${price},00`}</span>
            </div>
            <br />
            <button className="btn-add-cart" onClick={addProductToCart}>Adicionar ao carrinho</button>
            <ItemCount />
        </div>
    )
}