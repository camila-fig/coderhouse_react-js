import { NavLink } from "react-router-dom"
import { Category } from "../category/category"
import './categories.scss'

export function Categories( { categories}) {
    return (
        <div className="categories-container">
           {
            categories.map((category) => {
                return (
                    //pega o título da classe e direciona para página correspondente
                    <NavLink to={`shop/${category.title}`}>
                    <Category category={category} key={category.title} />
                    </NavLink>
                )
            })
           }
        </div>
    )
}