import { Route, Routes } from "react-router-dom";
import { CategorisPreview } from "../../components/categoria-preview/categoria-preview";
import "./shop.scss"
import { CategoryShop } from "../category-shop/category-shop";


export function Shop(){

return(
  <Routes>

    <Route index element={<CategorisPreview/>}/>
    <Route path=":category" element={<CategoryShop/>}/>
  </Routes>
  
)

}