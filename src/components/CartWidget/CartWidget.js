import React from 'react'
import { useHistory } from 'react-router-dom'

function CartWidget() {
    const history = useHistory();
    const handleCart = ()=> history.push('/cart')
    return (
        <button className="opcion__cart" onClick={handleCart}>
        <span className='material-icons'>
        shopping_cart
        </span>
        </button>
    )
}

export default CartWidget
