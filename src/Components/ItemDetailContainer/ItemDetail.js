import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import "./ItemDetail.css";



const ItemDetail = ({ items }) => (
  <Item.Group>
      
    <Item>
    
      <Item.Image src={items.pictureUrl} style={{ maxHeight: 600, minHeight: 600 }} />

      <Item.Content>
      <div className= "containerItem">
          
        <Item.Header>
            <spam className= "titleItem">{items.title}</spam></Item.Header>
        <Item.Meta>
            <div className='price'>
          <span >Precio :{items.price}</span></div>
          <div className='stay'>
          <span >Stock disponible :{items.stock}</span></div>
        </Item.Meta>
        <Item.Description>{items.totalDescription}</Item.Description>
        </div>
      </Item.Content>
      
    </Item>

   
  </Item.Group>
)

export default ItemDetail
