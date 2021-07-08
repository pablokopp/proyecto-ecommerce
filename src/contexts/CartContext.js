import { createContext, useState } from "react";

export const CartContext = createContext({});
 


export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = id => cart.some( item => item.id === id);

    const removeItem = (remItemId)=> {cart.filter(item => item.id !== remItemId )}

    const addToCart = (item, quantity) =>{
        if(isInCart(item.id)){
            const nuevoCart = cart.map(cartItem =>{
                if(cartItem.id === item.id){
                    return {...cartItem, quantity:  cartItem.quantity + quantity}
                } else return cartItem;
            })
            setCart(nuevoCart)
        } else{
            setCart(prev => [...prev, {...item, quantity}])}      
    }
    

    return <CartContext.Provider value={{cart, setCart, clearCart,addToCart,removeItem}}>
        {children}
    </CartContext.Provider>
}