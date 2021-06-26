import React,{useEffect, useState} from 'react'
import Item from '../Item/Item'
import './ItemList.css'



function ItemList(props) {
    const productos = props.objeto;

    return (
            <>
               {productos.map((producto)=>{
                   return <Item key={producto.id} objeto={producto}/>
               })}
            </>
            )
    
}

export default ItemList



// fetch('https://mocki.io/v1/f7220d99-4bf0-4e94-b444-59c7176ab313').then(
//     (respuesta)=> respuesta.json())
//     .then(function(respuesta){
//         let itemsData = respuesta;
//         return itemsData
//     })


/* <Item 
title = {item.title}
precio = {item.precio}
detalle = {item.detalle}
stock = {item.stock}
pictureUrl = {item.pictureUrl}
/> */