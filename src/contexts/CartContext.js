import { createContext, useState } from "react";
import { pedidosCollection } from "../firebase";

export const CartContext = createContext({});
 


export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const cartQuantity = cart.reduce(function(a,b){return a + (b.quantity)}, 0)


    const clearCart = () => setCart([]);

    const isInCart = id => cart.some( item => item.id === id);

    const removeItem = (removeItemId) => {setCart(cart.filter(item => item.id !== removeItemId))}

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
    
    const realStock = product => {
        const foundProd = cart.find(prod => prod.id === product.id);
        return foundProd? product.stock - foundProd.quantity : product.stock
    }

    const getCheckoutId = async ()=>{
        console.log(pedidosCollection.doc())
    }

    return <CartContext.Provider value={{cart, setCart, clearCart,addToCart,removeItem, realStock, cartQuantity, getCheckoutId}}>
        {children}
    </CartContext.Provider>
}