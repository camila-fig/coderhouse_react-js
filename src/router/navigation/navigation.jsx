import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import barril from '../../assets/barril.png'
import pesquisar from '../../assets/search.png'
import './navigation.scss'
import { Categories } from '../../components/categories/categories'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


const categories = [
    {
        "id": 1,
        "title": "branco"
    },
    {
        "id": 2,
        "title": "verde"
    },
    {
        "id": 3,
        "title": "tinto"
    },
    {
        "id": 4,
        "title": "rose"
    },
    {
        "id": 5,
        "title": "espumante"
    }
]

export function Navigation() { 

const {isCartOpen} = useContext(CartContext) 

    return (
        <>
            <div className="navigation">
                <NavLink to="/" className="nav-logo">
                    <div>
                        <img className="nav-logo-image" src={barril} alt="Imagem de barril" />
                    </div>
                    <div className="store-name">
                        <p className="store-name-adega">Adega</p>
                        <p className="store-name-online">On-line</p>
                    </div>
                </NavLink>
                <div className='nav-search'>
                    <input className='nav-search-text' type="search" placeholder='pesquisar um rótulo' />
                    <img className='nav-icon-search' src={pesquisar} alt="Pesquisar" />
                </div>
                <div className="icon-container">
                    <p className="nav-link">Favoritos</p>
                    <NavLink to="/auth" className="nav-link">Entrar</NavLink>
                </div>
                <CartIcon />
                
                {/* faz o dropdown aparecer e sumir */}
                {isCartOpen && <CartDropdown/>}
            </div>

                <Categories categories={categories}/>

            <Outlet />
        </>
    )
}