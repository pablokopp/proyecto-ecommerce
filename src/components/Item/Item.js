import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item({pictureUrl, title, id, price}) {
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

