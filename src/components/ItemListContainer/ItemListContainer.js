import React,{useState, useEffect} from 'react'
import './ItemListContainer.css'

import ItemList from '../ItemList/ItemList'



function ItemListContainer(props) {
    const [productos, setProductos] = useState([])
    

    useEffect(() => {
        fetch("https://mocki.io/v1/c0599f39-0c6e-433d-9c6b-6ce9172ad37c").then((response)=>response.json()).then((respuestaProductos)=>{
            setProductos(respuestaProductos)
        })
    },[])


    return (
        <div className='container__list'>
            <h1>{props.greeting}</h1>
            <div className='list__items'>
            <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer

