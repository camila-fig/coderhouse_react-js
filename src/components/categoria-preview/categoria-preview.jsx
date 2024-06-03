import { useEffect, useState } from "react"
import { addCollentionAdDocuments, getCategoriesAndDocuments } from "../../utils/firebase"
import { WINE_LIST } from "../../../wine-list"
import { CategoryPreview } from "../category-preview/category-preview"

export function CategorisPreview() {

    const [categories, setCategories] = useState({})

    //Executa o salvamento no firebase
    // useEffect(() =>{
    // addCollentionAdDocuments('categorias', WINE_LIST)
    // },[])

    useEffect(() => {
        const getCategories = async () => {
            const category = await getCategoriesAndDocuments()
            // console.log(category)
            setCategories(category)
        }
        getCategories()
    }, [])

    // console.log(categories)

    return (
        <>
            {
                Object.keys(categories).map(title => {
                    const products = categories[title]

                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }
        </>
    )
}