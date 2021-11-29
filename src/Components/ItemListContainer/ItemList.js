
import Item from "./Item";
import "./Item.css";
import React, { Fragment } from 'react';

const ItemList = ({items}) => {
    return(
      <Fragment>
          <div className="CardContainer">
        {items.map((item)=>{
          return <Item key={item.id} item={item}/>
        })}
        </div>
      </Fragment>
    )
  }
  
  export default ItemList;