import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


function ItemDetail({pictureUrl, price, detail, stock, title}) {
    return (
      <div className="container__itemDetail">
        <img className='itemDetail__img' src={pictureUrl} alt={title}/>
        <div className='itemDetail__text'>
          <h1>{title} - ${price}</h1>
          <p>{detail}</p>
          <p className='itemDetail__hover'>Hace tu pedido!</p>
          <ItemCount stock={stock} />   
        </div>
      </div>
    )
}

export default ItemDetail
