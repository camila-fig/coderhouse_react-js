import { NavLink, Outlet } from "react-router-dom";
import { ShopCart } from "../../components/shop_cart/shop-cart";
import "./navigation.scss"
import uvinha from '../../assets/uvinha.png'

export function Navigation() {
    return (
        <>

            <div className="navigation">
                <div className="title-home">
                    <NavLink className="linkNav" to={"/"}>
                        <img src={uvinha} alt="" />

                        <h1 >Adega On-line</h1>
                    </NavLink>

                </div>

                <div className="navigations-links">

                    <NavLink className="navigation-link" to={"/shop"}>
                        Shop
                    </NavLink>
                    <NavLink className="navigation-link" to={"/"}>
                        Login
                    </NavLink>

                </div>
                <ShopCart />
            </div>
            <Outlet />
        </>
    )
}