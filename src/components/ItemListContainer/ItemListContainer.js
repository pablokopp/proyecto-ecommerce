import React,{useState, useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {productosCollection} from '../../firebase'

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


//        fetch("https://mocki.io/v1/aca7b55c-8cce-483b-b203-ccbac46c9366")
//.then((response)=>response.json())
//.then((respuestaProductos)=>{
//    if(!categoryName){setProductos(respuestaProductos); isLoading(false)}
//    else{setProductos(respuestaProductos.filter(rta=> rta.category === categoryName))}; isLoading(false) })