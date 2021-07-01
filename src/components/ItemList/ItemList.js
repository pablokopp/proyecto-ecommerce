import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


function ItemList(props) {
    const productos = props.productos;

    return (
        <>
            {productos.map((producto)=>{
                return (
                <Item key={producto.id} producto={producto}/>
                )
            })}
        </>
            )
    
}

export default ItemList