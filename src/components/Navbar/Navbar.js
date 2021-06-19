import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
function Navbar() {
    return (
        <div className='menu'>
            <div id='logo'>
                <h1>miMarca</h1>
                </div>
            
            <button className='menu__opcion'>Productos</button>
            <button className='menu__opcion'>Quienes somos?</button>
            <button className='menu__opcion'>Contacto</button>
            <CartWidget />

        </div>
    )
}

export default Navbar
