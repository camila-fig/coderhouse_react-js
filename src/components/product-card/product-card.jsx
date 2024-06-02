
import "./product-card.scss"
export function ProductCard({product}){

    const {name, price, imageUrl} = product

    return(
        <div className="wine-image-product-card">
            <img src={imageUrl} alt={`${name}`} />
            <div>
                <span className="name-wine">{name}</span>
                <br />
                <span className="price-wine">{`R$ ${price},00`}</span>
            </div>
            <br />
            <button className="btn-add-cart">Adicionar ao carrinho</button>

        </div>
    )
}