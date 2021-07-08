import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

function Item({pictureUrl, title, id, category, price, stock}) {
    return (
        <div className='container__item'>
            <img className='item__img'src={pictureUrl} alt={`Se muetra ${title}`}/>
            <Link to={`/item/${id}`}>
            <h2 className='item__title'>{title}</h2>
            </Link>
            <h3 className='item__price'>${price}</h3>
        </div>
    )
}

export default Item

