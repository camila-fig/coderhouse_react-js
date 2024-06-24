import { Route, Routes } from "react-router-dom";
import { CategorisPreview } from "../../components/categoria-preview/categoria-preview";
import { CategoryShop } from "../category-shop/category-shop";
import "./shop.scss"

export function Shop() {
  return (
    <Routes>
      <Route index element={<CategorisPreview />} />
      <Route path=":category" element={<CategoryShop />} />
    </Routes>
  )
}