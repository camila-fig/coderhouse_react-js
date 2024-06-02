import { Outlet } from 'react-router-dom'
import barril from '../../assets/barril.png'
import pesquisar from '../../assets/search.png'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'

export function Navigation() {
    return (
        <>
            <div className="navigation">
                <div className="nav-logo">
                    <div className="nav-logo">
                        <img className="nav-logo-image" src={barril} alt="Imagem de barril" />
                    </div>
                    <div className="store-name">
                        <p className="store-name-adega">Adega</p>
                        <p className="store-name-online">Online</p>
                    </div>
                </div>
                <div className='nav-search'>
                    <input className='nav-search-text' type="search" placeholder='pesquisar um rótulo' />
                    <img className='nav-icon-search' src={pesquisar} alt="Pesquisar" />
                </div>
                <div className="icon-container">
                    <p className="nav-link">Favoritos</p>
                    <p className="nav-link">Entrar</p>
                </div>
                <CartIcon />
            </div>
            <Outlet />
        </>
    )
}