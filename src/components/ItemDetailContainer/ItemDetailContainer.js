import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router';

import ItemDetail from '../ItemDetail/ItemDetail'


function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const [loading, isLoading] = useState(true); 
    
    useEffect(() => {
        fetch("https://mocki.io/v1/aca7b55c-8cce-483b-b203-ccbac46c9366").then((response)=>response.json()).then((respuestaProductos)=>{
            setItem(respuestaProductos.find((item)=> item.id === id))
            isLoading(false);
        })
    },[id])

    if(loading) return <h1>Loading...</h1>
    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer
