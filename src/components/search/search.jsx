import './search.scss'
import { useState } from "react";
import { WINE_LIST } from "../../../wine-list.js"
import { Link } from "react-router-dom";
import pesquisar from '../../assets/search.png'

export function Search() {

    //Une as categorias e cria um array apenas com os produtos do arquivo shop-data.js
    const products = WINE_LIST[0].items.concat(WINE_LIST[1].items).concat(WINE_LIST[2].items).concat(WINE_LIST[3].items).concat(WINE_LIST[4].items)
    // console.log("Produtos", products)

    //Mecanismo de busca
    const [search, setSearch] = useState('')
    const lowerSearch = search.toLowerCase()
    const productsFiltered = products
        .filter((product) => product.name.toLowerCase().includes(lowerSearch))
    // console.log("Filtrado", productsFiltered)

    return (
        <>
            <div>
                <div className='search-container'>
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
                    <ul style={{ display: !search ? 'none' : 'grid' }}>
                        {productsFiltered.map((product) => (
                            <li key={product.id}>
                                <Link to={`/product-detail/${product.id}`}>
                                    <span>{product.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}