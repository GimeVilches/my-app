import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";


const Item = ({ item }) => {
  return (
    <Fragment>
      <Link className="card-container" to={`/product/${item.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={item.img}
          style={{ Height: "550px", objectFit: "cover" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title
            style={{ textTransform: "uppercase", textAlign: "center" }}
          >
            {item.title}
          </Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              paddingBottom: "1rem",
            }}
          >
            <p className="fs-5 mb-0">${item.price}</p>
          </div>
          <Button style={{backgroundColor:"rgb(79, 192, 172)", border:"none", color:"#fff"}}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
      </Link>
    </Fragment>
  );
};

export default Item;

