import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount(props) {  
    const [contador, setContador] = useState(0);
    const handleUp = function(){
        if(contador<props.stock){
            setContador(contador +1)}
            else{
                setContador(props.stock)
            }}         
    const handleDown = function(){
        if(contador>0){setContador(contador-1)}
    }
    return (
        <div className='contador'>
            <button className='contador__item'onClick={handleDown}>-</button>
            <p className='contador__item item__centro'>{contador}</p>
            <button className='contador__item' onClick={handleUp}>+</button>
        </div>
    )
}

export default ItemCount
