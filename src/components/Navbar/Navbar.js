import React from 'react'
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logoImg from './logo.png'

function Navbar() {
    const history = useHistory()

    const handleHome = ()=>{
        history.push('/')
    }
    const handleChange = (e)=>{
        if(e.target.value){
            history.push(`/category/${e.target.value}`)}
        else{
            history.push('/')
        }
    }
    const handleQuienes = ()=> history.push('/quienesSomos')

    return (
        <div className='menu'>
            <div id='logo' onClick={handleHome}>
                <h1 className='logo__content'>miPlacard</h1>
                <img src={logoImg} alt='miPlacard Logo' className='logo__content'/>
            </div>
            <button onClick={handleHome} className='menu__opcion'>Productos</button>
            <select onChange={handleChange} className='menu__select'>
                    <option value=''>Buscas ropa para</option>
                    <option value='arriba'>Arriba</option>
                    <option value='abajo'>Abajo</option>
            </select>
            <button className='menu__opcion' onClick={handleQuienes}>Quienes somos?</button>
            <CartWidget />

        </div>
    )
}

export default Navbar