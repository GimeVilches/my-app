import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Item = ({id, description, price, pictureUrl, title}) => (
  <Card >
    <Image src={pictureUrl} style={{ maxHeight: 400, minHeight: 400 }} />
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
      
    </Card.Content>
  </Card>
)

export default Item;