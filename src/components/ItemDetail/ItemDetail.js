import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


function ItemDetail(props) {
    return (
      <div className="container__itemDetail">
        <img className='itemDetail__img' src={props.item.pictureUrl} />
        <div className='itemDetail__text'>
          <h1>{props.item.title} - ${props.item.price}</h1>
          <p>{props.item.detail}</p>
          <p className='itemDetail__hover'>Hace tu pedido!</p>
          <ItemCount stock={props.item.stock} />         
        </div>
      </div>
    )
}

export default ItemDetail
