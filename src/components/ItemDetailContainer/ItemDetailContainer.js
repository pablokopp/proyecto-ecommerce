import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router';

import ItemDetail from '../ItemDetail/ItemDetail'


function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    
    useEffect(() => {
        fetch("https://mocki.io/v1/c0599f39-0c6e-433d-9c6b-6ce9172ad37c").then((response)=>response.json()).then((respuestaProductos)=>{
            setItem(respuestaProductos.find((item)=> item.id === id))
        })
    },[])

    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer
