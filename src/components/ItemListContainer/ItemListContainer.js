import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import {productosCollection} from '../../firebase'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(props) {
    const {categoryName} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, isLoading] = useState(true); 

    useEffect(() => {
        (async() => {
            let collection = productosCollection;
            if(categoryName) collection = productosCollection.where("category","==", categoryName)
            const response = await collection.get()
            setProductos(response.docs.map(prod => ({id: prod.id, ...prod.data()})))
            isLoading(false)
        })();
    },[categoryName])

    if(loading) return <h1>Loading...</h1>

    return (
    <>            
        {props.greeting ? <h1>{props.greeting}</h1> : ''}    
        <div className='list__items'>
            <ItemList productos={productos}/>
        </div>
    </>    
)}

export default ItemListContainer