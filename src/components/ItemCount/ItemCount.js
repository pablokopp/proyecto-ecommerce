import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, onAdd}) => {  
    const [cantidad, setCantidad] = useState(0);
    const handleUp = function(){
        if(cantidad<stock){
            setCantidad(cantidad +1)}
            else{
                setCantidad(stock)
            }}         
    const handleDown = function(){
        if(cantidad>0){setCantidad(cantidad-1)}
    }

    return (
        <div className='container__itemCount'>
            <div className='contador'>
                <button className='contador__item'onClick={handleDown}>-</button>
                <p className='contador__item item__centro'>{cantidad}</p>
                <button className='contador__item' onClick={handleUp}>+</button>
                
            </div>
            <button className='botonAgregarCart' onClick={()=> {
                if(cantidad >0){
                onAdd(cantidad)
                setCantidad(0)}
                }}>
                Agregar al 🛒
            </button>
            
        </div>
    )
}

export default ItemCount
