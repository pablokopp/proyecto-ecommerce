import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'


export default function Cart() {
    const {cart, clearCart} = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h1>Tu Carrito</h1>
            {cart.map((producto)=>{
                return (
                <div key={producto.id}>
                    <img width='100'height='100' src={producto.pictureUrl}alt={`Esto muestra un@ ${producto.title}`}></img>
                    <span>{producto.title}</span>
                    <span>{producto.quantity}</span>
                    <span>Precio por unidad ${producto.price}</span>
                    <span className='cart__itemTotal'>Precio Total ${producto.price * producto.quantity}</span>
                </div>
                )
            })}
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    )
}
