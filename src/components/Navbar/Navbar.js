import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

import logoImg from './logo.png'

function Navbar() {
    return (
        <div className='menu'>
            <div id='logo'>
                <h1>miPlacard</h1>
                <Link to='/'>
                <img src={logoImg} alt='miPlacard Logo'/>
                </Link>
            </div>
            <button className='menu__opcion'>Productos</button>
            <button className='menu__opcion'>Quienes somos?</button>
            <button className='menu__opcion'>Contacto</button>
            <CartWidget />

        </div>
    )
}

export default Navbar
