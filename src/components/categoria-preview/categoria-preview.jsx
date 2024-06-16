

import { useContext } from "react"
import { CategoriesContext } from "../../context/categoriesContext"
import { CategoryPreview } from "../category-preview/category-preview"

export function CategorisPreview() {



    //Executa o salvamento no firebase
    // useEffect(() =>{
    // addCollentionAdDocuments('categorias', WINE_LIST)
    // },[])


    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title]

                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }
        </>
    )
}