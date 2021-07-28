import React from 'react'
import Item from '../Item/Item'


function ItemList(props) {
    const productos = props.productos;

    return (
        <>
            {productos.map((producto)=>{
                return (
                <Item key={producto.id} {...producto}/>
                )
            })}
        </>
    )   
}

export default ItemList