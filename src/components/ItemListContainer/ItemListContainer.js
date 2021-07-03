import React,{useState, useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {
    const {categoryName} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, isLoading] = useState(true); 

    useEffect(() => {
        fetch("https://mocki.io/v1/aca7b55c-8cce-483b-b203-ccbac46c9366")
        .then((response)=>response.json())
        .then((respuestaProductos)=>{
            if(!categoryName){setProductos(respuestaProductos); isLoading(false)}
            else{setProductos(respuestaProductos.filter(rta=> rta.category === categoryName))}; isLoading(false) })
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

