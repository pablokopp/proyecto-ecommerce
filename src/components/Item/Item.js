import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

function Item(props) {
    const producto = props.producto;
    return (
        <div className='container__item'>
            <img className='item__img'src={producto.pictureUrl} alt={`Se muetra ${producto.title}`}/>
            <Link to={`/item/${producto.id}`}>
            <h2 className='item__title'>{producto.title}</h2>
            </Link>
            <h3 className='item__price'>${producto.price}</h3>
            <ItemCount className='item__count' stock={producto.stock} />
        </div>
    )
}

export default Item

