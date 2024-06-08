import { Categories } from "../../components/categories/categories"
import { Footer } from "../../components/footer/footer"
import { PosterOverlay } from "../../components/poster-overlay/poster-overlay"
import { SaleCellar } from "../sale-cellar/sale-cellar"



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