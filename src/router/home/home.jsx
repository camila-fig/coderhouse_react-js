import { Categories } from "../../components/categories/categories"
import { Footer } from "../../components/footer/footer"
import { PosterOverlay } from "../../components/poster-overlay/poster-overlay"
import { SaleCellar } from "../sale-cellar/sale-cellar"

const categories = [
    {
        "id": 1,
        "title": "VINHO BRANCO"
    },
    {
        "id": 2,
        "title": "VINHO VERDE"
    },
    {
        "id": 3,
        "title": "VINHO TINTO"
    },
    {
        "id": 4,
        "title": "VINHO ROSÉ"
    },
    {
        "id": 5,
        "title": "ESPUMANTE"
    }
]

export function Home() {
return (
    <>
    <Categories categories={categories} />
    <PosterOverlay />
    <SaleCellar />
    <Footer />
    </>
)    
}