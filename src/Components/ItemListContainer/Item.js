import React from 'react'
import { Card, Image } from 'semantic-ui-react';
import ItemCount from "../ItemCount/ItemCount";

const Item = ({id, description, price, pictureUrl, title}) => (
  <Card >
    <Image src={pictureUrl} style={{ maxHeight: 600, minHeight: 600 }} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{price}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <ItemCount inicial ="0" stock = "10" /> 
    </Card.Content>
  </Card>
)

export default Item;