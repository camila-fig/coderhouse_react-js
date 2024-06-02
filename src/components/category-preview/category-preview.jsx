import { Link } from "react-router-dom";
import { ProductCard } from "../product-card/product-card";
import "./category-preview.scss"

export function CategoryPreview({ title, products }) {

    return (
        <div className="main-categories">
            <Link to={title} className="title-category">{title.toUpperCase()}</Link>
        
            <div className="wine-categories">
                {
                    products.filter((_, index) => index < 4)
                    .map((product) => <ProductCard key={product.id} product = {product}/>)
                }
            </div>
        </div>
    )

}