
import { Row, Container, Col, Image, Button } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import React, { useState } from "react";



const ItemDetail = ({ items }) => {
    const [itemCountVisible, setItemCountVisible] = useState(true);
    const [buyButtonVisibility, setBuyButtonVisibility] = useState(true);
    const [itemsCount, setItemsCount] = useState(0);
  
    const onAdd = (count) => {
      setItemsCount(count);
    };
  
    const onAddToCart = () => {
      setItemCountVisible(false);
      setBuyButtonVisibility(false);
    };
  
    return (
      <>
        <Container>
          <Row className="py-5">
            <Col className="d-flex align-items-center justify-content-center">
              <Image
                style={{ maxHeight: "500px", objectFit: "cover" }}
                src={items.pictureUrl}
                rounded
              />
            </Col>
            <Col className="info-container">
              <div className="d-flex flex-column justify-content-start">
                <h2>{items.title}</h2>
                <h2> {items.price}</h2>
                <p className="pb-5">{items.description}</p>
                {itemCountVisible && (
                  <ItemCount stock={items.stock} initial={0} onAdd={onAdd} />
                )}
                {buyButtonVisibility && (
                  <Button onClick={onAddToCart} className="w-50 align-self-center" style={{backgroundColor:"rgb(79, 192, 172)", border:"none"}}>
                    Agregar al carrito
                  </Button>
                )}
                {!buyButtonVisibility && (
                  <div className="d-flex flex-column align-items-center">
                    <p style={{fontSize:"1.5rem"}}>{itemsCount} Unidades agregadas al carrito.</p>
                    <Link to="/cart">
                      <Button className="btn-danger">Terminar compra</Button>
                    </Link>
                  </div>
                )}
              </div>
              <p>Stock: {items.stock} unidades disponibles.</p>
              
              
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default ItemDetail;
  
