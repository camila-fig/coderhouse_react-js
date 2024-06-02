import { ProductCard } from "../product-card/product-card";
import "./category-preview.scss"

export function CategoryPreview({ title, products }) {

    return (
        <div>
            <h2>{title.toUpperCase()}</h2>

            <div className="wine-categories">
                {
                    products.filter((_, index) => index < 4)
                    .map((product) => <ProductCard key={product.id} product = {product}/>)
                }
            </div>
        </div>
    )

}