import React,{useState, useEffect} from 'react'
import './ItemListContainer.css'

import ItemList from '../ItemList/ItemList'



function ItemListContainer(props) {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("https://mocki.io/v1/aca7b55c-8cce-483b-b203-ccbac46c9366").then((response)=>response.json()).then((respuestaProductos)=>{
            setProductos(respuestaProductos)
        })
    },[])


    return (
        <div className='container__list'>
            {props.greeting ? <h1>{props.greeting}</h1> : ''}
            <div className='list__items'>
            <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer

