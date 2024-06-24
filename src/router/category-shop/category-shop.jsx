import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../../context/categoriesContext"
import { ProductCard } from "../../components/product-card/product-card"
import "./category-shop.scss"

export function CategoryShop() {

    const { category } = useParams()

    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    // console.log(products)
    return (

        <>
            <h1 className="titla-category">{category.toUpperCase()}</h1>
            <div className="category-shopp">
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    )
}