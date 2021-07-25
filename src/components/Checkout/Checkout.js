import React, {useContext, useState} from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Checkout.css'

const Checkout = () => {
    const {cart, doCheckout, getCheckoutId} = useContext(CartContext)
    const initialState= {
        nombre:"",
        apellido:"",
        correo:"",
        producto:`${cart.map((producto)=>{return(`${producto.title} x ${producto.quantity}`)})}`
    }
    const [values, setValues] = useState(initialState)
    
    const handleOnChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]: value})
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        doCheckout(values)
        const lastID= getCheckoutId()
        alert(`Tu compra esta registrada bajo el numero ${lastID}`)
        console.log(lastID)
        setValues({...initialState})
    };



    return (
    <div>
        <form className='checkoutForm' onSubmit={handleSubmit}>
            <input name='nombre' placeholder='Nombre' required onChange={handleOnChange} value={values.nombre}></input>
            <input name='apellido' placeholder='Apellido' required onChange={handleOnChange} value={values.apellido}></input>
            <input name='correo' placeholder='Correo' required onChange={handleOnChange} value={values.correo}></input>
            <div>
                <ul>
                {cart.map((producto)=>{
                    return(
                        <li key={producto.id}>{producto.title} x {producto.quantity}</li>
                    )
                })}
                </ul>
            </div>
            <button type='submit'>Hacer pedido!</button>
            
        </form>        

    </div>
    )
}

export default Checkout
