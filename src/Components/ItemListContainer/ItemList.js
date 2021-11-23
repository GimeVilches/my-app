import React from 'react';
import Item from "./Item";
import "./Item.css";

const ItemList = ({products}) =>{
    console.log('Products en ItemList', products)
    return(
        <div className= "CardContainer">
        {products.map(product => {
           return(
            <Item 
            key={product.id}
            description = {product.description}
            image = {product.pictureUrl}
            price = {product.price}
            title = {product.title}
            />
           )
        })}
        </div>
    )
}
export default ItemList