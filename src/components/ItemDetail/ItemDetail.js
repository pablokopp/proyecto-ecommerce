import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item})=> {
  const {addToCart, realStock} = useContext(CartContext)
  const history = useHistory()
  const stock = realStock(item)

  const [cartFilled, isCartFilled] = useState(false)

  const handleCart = ()=>history.push('/cart')

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
        {stock > 0 ? 
        <ItemCount stock={stock} onAdd={onAdd}/> :
        <h1>Sin Stock</h1>}
        {!cartFilled ? '' :
        <button className='itemDetail__toCart' onClick={handleCart}>Finalizar Compra</button>} 
      </div>
    </div>
  )
}

export default ItemDetail
