import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import './Checkout.css'
import firebase from 'firebase'

const Checkout = () => {
    const {cart, doCheckout, getCheckoutId} = useContext(CartContext)
    const history = useHistory();

    const initialState= {
        nombre:"",
        apellido:"",
        telefono:"",
        correo:"",
        producto: cart.map((producto)=>{
            return({
                    id: producto.id,
                    nombre: producto.title,
                    cantidad:producto.quantity,
                    precio:producto.price,
                    })}),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: cart.reduce(function(a,b){return a + (b.price * b.quantity)}, 0)

    }
    const [values, setValues] = useState(initialState)
    const [finCheckout, isFinCheckout] = useState(false)
    
    const handleOnChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]: value})
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        doCheckout(values)
        setValues({...initialState})
        isFinCheckout(true)

    };


    if(!finCheckout){
    return (
    <div>
        <form className='checkoutForm' onSubmit={handleSubmit}>
            <input name='nombre' placeholder='Nombre' required onChange={handleOnChange} value={values.nombre}></input>
            <input name='apellido' placeholder='Apellido' required onChange={handleOnChange} value={values.apellido}></input>
            <input name='correo' placeholder='Correo' required onChange={handleOnChange} value={values.correo}></input>
            <input name='telefono' placeholder='Telefono' required onChange={handleOnChange} value={values.telefono}></input>

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
    )}
    return(
        <div>
            <h1>Gracias por tu pedido!</h1>
            <button onClick={()=>{isFinCheckout(false); history.push('/')}}>Seguir Comprando</button>
        </div>
    )
}

export default Checkout
