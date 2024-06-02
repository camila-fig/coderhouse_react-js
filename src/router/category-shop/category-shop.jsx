import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase"
import { ProductCard } from "../../components/product-card/product-card"

import "./category-shop.scss"

export function CategoryShop() {

    const { category } = useParams()

    const [categoriesMap, setCategoriesMap] = useState({})
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            // console.log(category)
            setCategoriesMap(categoryMap)
        }

        getCategories()
    }, [])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])


    // console.log(products)
    return (

        <>
        
        <h1>{category.toUpperCase()}</h1>
        <div className="category-shopp">
            {
                products && products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        
        </>
    )
}