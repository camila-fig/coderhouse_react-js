
import { ItemCount } from "../item-count/item-count"
import "./product-card.scss"
export function ProductCard({product}){

    const {name, price, imageUrl} = product

    return(
        <div className="wine-image-product-card">
            <img src={imageUrl} alt={`${name}`} />
            <div className="datas-wine">
                <span className="name-wine">{name}</span>
                <br />
                <span className="price-wine">{`R$ ${price},00`}</span>
            </div>
            <br />
            <button className="btn-add-cart">Adicionar ao carrinho</button>
            <ItemCount />
        </div>
    )
}