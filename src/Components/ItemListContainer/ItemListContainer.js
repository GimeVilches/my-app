import "./ItemListContainer.css";

import { useState, useEffect } from 'react'
import ItemList from "./ItemList";
import getProducts from "../Services/Products";



const ItemListContainer= (props) =>{
    const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts
    .then(res => {
      setProducts(res)
    })
    .catch(err => alert('Estamos ante un problema', err))
  },[])
    return(
        <div className="contenedor">
            <h1 style={{color:`${props.color}`}}>{props.greeting}</h1>
            
            <ItemList products={products} />
           
        </div>
    )

}
export default ItemListContainer