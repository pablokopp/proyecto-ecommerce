import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../contexts/CartContext'
import { useHistory } from 'react-router-dom'

const ItemDetail = ({item})=> {
  const history = useHistory();
  const handleCart = ()=>history.push('/cart')


  const {addToCart} = useContext(CartContext)
  const [cartFilled, isCartFilled] = useState(false)
  const onAdd = qty => {
    addToCart(item, qty)
    isCartFilled(true)
  }
  return (
    <div className="container__itemDetail">
      <img className='itemDetail__img' src={item.pictureUrl} alt={item.title}/>
      <div className='itemDetail__text'>
        <h1>{item.title} - ${item.price}</h1>
        <p>{item.detail}</p>
        <p className='itemDetail__hover'>Hace tu pedido!</p>
        <ItemCount stock={item.stock} onAdd={onAdd} />  
        {!cartFilled ? '' :
        <button className='itemDetail__toCart' onClick={handleCart}>Finalizar Compra</button>} 
      </div>
    </div>
  )
}

export default ItemDetail
