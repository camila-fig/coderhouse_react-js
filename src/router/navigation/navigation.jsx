import './navigation.scss'
import barril from '../../assets/barril.png'
import { NavLink, Outlet } from 'react-router-dom'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import { Categories } from '../../components/categories/categories'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { UserContext } from '../../context/userContext'
import { signOutAuthUser } from '../../utils/firebase'
import { Search } from '../../components/search/search'

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

    const { isCartOpen } = useContext(CartContext)
    const { currentUser } = useContext(UserContext)

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
                    <Search />
                </div>
                <div className="icon-container">
                    <p className="nav-link">Favoritos</p>
                    {
                        currentUser ? (
                            <NavLink className="icon-container" onClick={signOutAuthUser}>
                                <div className="nav-link">Sair</div>
                            </NavLink>
                        ) : (
                            <NavLink to='/auth' className="icon-container">
                                <div className="nav-link">Entrar</div>
                            </NavLink>
                        )
                    }
                </div>
                <CartIcon />

                {/* faz o dropdown aparecer e sumir */}
                {isCartOpen && <CartDropdown />}
            </div>
            <Categories categories={categories} />
            <Outlet />
        </>
    )
}