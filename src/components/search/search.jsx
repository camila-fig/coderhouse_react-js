import './search.scss'
import { useState } from "react";
import { WINE_LIST } from "../../../wine-list.js"
import pesquisar from '../../assets/search.png'

export function Search() {

    //Une as categorias e cria um array apenas com os produtos do arquivo shop-data.js
    const products = WINE_LIST[0].items.concat(WINE_LIST[1].items)
    // console.log(products)

    //Mecanismo de busca
    const [search, setSearch] = useState('')
    const lowerSearch = search.toLowerCase()
    const productsFiltered = products
        .filter((product) => product.name.toLowerCase().includes(lowerSearch))
    // console.log(productsFiltered)

    const searchResults = productsFiltered.map((product) => (
        <li key={product.id}>
            <span>{product.name}</span>
        </li>))

    return (
        <>
            <div>
                <div>
                    <input
                        className='search-text'
                        type="search"
                        placeholder='pesquisar um rótulo'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <img className='search-icon' src={pesquisar} alt="Pesquisar" />
                </div>
                <div className="search-results">
                    <ul style={{ display: !search ? 'none' : 'grid' }}>{searchResults}</ul>
                </div>
            </div>
        </>
    )
}