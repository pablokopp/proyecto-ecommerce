import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'


function Item(props) {
    const producto = props.objeto;
    console.log(producto)
    return (
        <div className='container__item'>
            
            <img className='item__img'src={producto.pictureUrl}/>

            <h2 className='item__title'>{producto.title}</h2>
            <h3 className='item__price'>${producto.price}</h3>
            <ItemCount className='item__count' stock={producto.stock} />
            <p className='item__detail'>{producto.detail}</p>
        </div>
    )
}

export default Item



// creo que aca hay que crear la data de los objetos que voy a vender, osea el objeto Items
// va a tener otros objetos dentro cada uno con sus propiedades { id, title, description, price, pictureUrl } 

// NOTA
//1- lo tengo que exportar como un objeto!
//2- tengo que hacer una especie de card que muestre mi objeto en cuestion???



/* 
<div>
<img src={props.pictureUrl} alt='imagen'/>
</div>
<h2 className='item__titulo'>{props.title}</h2>
<h3 className='item__precio'>{props.precio}</h3>
<ItemCount stock={props.stock} />
<p className='item__detalle'>{props.detalle}</p> */
