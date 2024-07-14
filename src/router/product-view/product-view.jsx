import "./product-view.scss"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { useParams } from "react-router-dom";
import { WINE_LIST } from "../../../wine-list";

export function ProductView() {

    const { id: productId } = useParams()
    const products = WINE_LIST[0].items.concat(WINE_LIST[1].items).concat(WINE_LIST[2].items).concat(WINE_LIST[3].items)
    const product = products[productId]
    const { name, price, imageUrl, description } = product

    console.log(products)

    const { addItemToCart, clearItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    const removeItem = () => clearItemToCart(product)

    return (
        <>
            <div className="product-view-container">
                <p className="product-title">{name}</p>
                <div className="product-container">
                    <img className="product-image" src={imageUrl} alt="Foto do produto" />
                    <p className="product-description">{description}</p>
                    <div className="product-price-container">
                        <p>Preço</p>
                        <p className="product-price">R$ {price.toFixed(2).toString().replace(".", ",")}</p>
                        </div>
                    <button className="product-btn-add" onClick={addProductToCart}>Adicionar ao carrinho</button>
                    <button className="product-btn-remove" onClick={removeItem}>Remover do carrinho</button>
                </div>
            </div>
        </>
    )
}


