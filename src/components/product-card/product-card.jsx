import "./product-card.scss"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";

export function ProductCard({ product }) {

    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className="wine-image-product-card">
            <Link to={`/product-detail/${product.id}`}> 
                <img src={imageUrl} alt={`${name}`} />
            </Link>
            <div className="datas-wine">
                <span className="name-wine">{name}</span>
                <br />
                <span className="price-wine">{`R$ ${price},00`}</span>
            </div>
            <button className="btn-add-cart" onClick={addProductToCart}>Adicionar ao carrinho</button>
        </div>
    )
}