import { Categories } from "../../components/categories/categories"
import { Footer } from "../../components/footer/footer"
import { PosterOverlay } from "../../components/poster-overlay/poster-overlay"
import { SaleCellar } from "../sale-cellar/sale-cellar"

// const categories = [
//     {
//         "id": 1,
//         "title": "branco"
//     },
//     {
//         "id": 2,
//         "title": "verde"
//     },
//     {
//         "id": 3,
//         "title": "tinto"
//     },
//     {
//         "id": 4,
//         "title": "rose"
//     },
//     {
//         "id": 5,
//         "title": "espumante"
//     }
// ]

export function Home() {
return (
    <>
    {/* <Categories categories={categories} /> */}
    <PosterOverlay />
    <SaleCellar />
    <Footer />
    </>
)    
}