import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';

function CartWidget() {
    const history = useHistory();
    const handleCart = ()=> history.push('/cart')
    const {cartQuantity} = useContext(CartContext)

    if(cartQuantity>0){
        return (
            <button className="opcion__cart" onClick={handleCart}>
                <span className='material-icons'>
                shopping_cart
                </span>
                <span className="cartQuantity">{cartQuantity}</span>
            </button>
        )
    }
    return(<></>)
}

export default CartWidget
