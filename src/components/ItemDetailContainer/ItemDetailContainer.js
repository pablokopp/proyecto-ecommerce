import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router';
import {productosCollection} from '../../firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const [loading, isLoading] = useState(true); 
    
    useEffect(()=> {
        (async ()=>{
           const response = await productosCollection.doc(id).get();
           setItem({id: response.id, ...response.data()})
            isLoading(false);
        })()
    },[id])

    if(loading) return <h1>Loading...</h1>

    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer