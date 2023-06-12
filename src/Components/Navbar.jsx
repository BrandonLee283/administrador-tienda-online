import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

  
    return (
        <nav>
            <img src="assets/icons/icon_menu.svg" alt="" className="menu" />
            <div className="navbar-left">
                <img src="assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <ul>
                    <li><NavLink to={`/`}>Inicio</NavLink></li>
                    <li><NavLink to={`/categorias`}>Categorias</NavLink></li>
                    <li><NavLink to={`/`}>Productos</NavLink></li>

                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-shopping-cart" >
                        <img src="assets/icons/icon_shopping_cart.svg" alt="shopping-cart" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar