import { Categories } from "../../components/categories/categories"

const categories = [
    {
        "id": 1,
        "title": "VINHO BRANCO"
    },
    {
        "id": 2,
        "title": "VINHO TINTO"
    },
    {
        "id": 3,
        "title": "ESPUMANTES"
    },
    {
        "id": 4,
        "title": "KITS"
    }
]

export function Home() {
return (
    <div>
    <Categories categories={categories} />
    </div>
)    
}