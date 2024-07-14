import "./product-view.scss"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { useParams } from "react-router-dom";
import { WINE_LIST } from "../../../wine-list";
import { Footer } from "../../components/footer/footer"

export function ProductView() {

    const { id: productId } = useParams()
    const products = WINE_LIST[0].items.concat(WINE_LIST[1].items).concat(WINE_LIST[2].items).concat(WINE_LIST[3].items).concat(WINE_LIST[4].items)
    const product = products[productId]
    const { name, price, imageUrl, description } = product

    // console.log(products)

    const { addItemToCart, clearItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    const removeItem = () => clearItemToCart(product)

    const parcelado = price/10

    return (
        <>
            <div className="product-container">
                <p className="product-title">{name}</p>
                <img className="product-image" src={imageUrl} alt="Foto do produto" />
                <p className="product-description">{description}</p>
                <div className="product-price-container">
                    <p className="product-price">R$ {price.toFixed(2).toString().replace(".", ",")}</p>
                    <p>Em até 10x de {parcelado.toFixed(2).toString().replace(".", ",")}, sem juros.</p>
                </div>
                <button className="product-btn-add" onClick={addProductToCart}>Adicionar ao carrinho</button>
                <button className="product-btn-remove" onClick={removeItem}>Remover do carrinho</button>
            </div>
            <Footer />
        </>
    )
}


