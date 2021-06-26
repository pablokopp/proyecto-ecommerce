import React,{useState, useEffect} from 'react'
import './ItemListContainer.css'

import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import {listadoProductos} from './productos'



function ItemListContainer(props) {
    const promesa = new Promise ((response,reject)=>{
        setTimeout(() => {
            response(listadoProductos)
        }, 2000);
    })
    const [productos, setProductos] = useState([])

    useEffect(() => {
        promesa.then((respuestaProductos)=>{
            setProductos(respuestaProductos)
        })
    })


    return (
        <div className='container__list'>
            <h1>{props.greeting}</h1>
            <div className='list__items'>
            <ItemList objeto={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer
