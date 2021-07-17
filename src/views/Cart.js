import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'


export default function Cart() {
    const {cart, clearCart, removeItem, cartQuantity} = useContext(CartContext)
    const totalCart = cart.reduce(function(a,b){return a + (b.price * b.quantity)}, 0)
    console.log(cart)
    const history = useHistory();

    if(cartQuantity !== 0 ){return (
        
        <div>
            <h1>Tu Carrito</h1>
            {cart.map((producto)=>{
                return (
                <div key={producto.id} className='cartGrid'>
                    <img className='cartImg' src={producto.pictureUrl}alt={`Esto muestra un@ ${producto.title}`}></img>
                    <span>{producto.title}</span>
                    <span>{producto.quantity}</span>
                    <span>Precio por unidad ${producto.price}</span>
                    <span className='removeItem' onClick={()=>removeItem(producto.id)}>🗑️</span>
                </div>
                )
            })}
            <div className='cartTotal'>
            <h1>Total: ${totalCart}</h1>
            <button onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
}
    return(
       <div className='cartEmpty'>             
        <h1>Tu carrito está vacío 😔</h1>
        <h2 onClick={()=>history.push('/')}>Busca algo en miPlacard 🤩</h2>
        </div>
    
    )

}

var arr = [{x:1}, {x:2}, {x:4}];
arr.reduce(function (acc, obj) { return acc + obj.x; }, 0); // 7
console.log(arr);