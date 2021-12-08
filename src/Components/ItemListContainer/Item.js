import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Item = ({ id, img, stock, title, price, description, category }) => {
  return (
    <Fragment>
      <Link className="cardContainer" to={`/item/${id}`}>
        <Card style={{ width: "300px" }}>
          <Card.Img
            variant="top"
            src={img}
            style={{ Height: "550px", objectFit: "cover" }}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title
              style={{ textTransform: "uppercase", textAlign: "center" }}
            >
              {title}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                paddingBottom: "1rem",
              }}
            >
              <p className="fs-5 mb-0">${price}</p>
            </div>
            <Button
              style={{
                backgroundColor: "rgb(79, 192, 172)",
                border: "none",
                color: "#fff",
              }}
            >
              Agregar al carrito
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </Fragment>
  );
};

export default Item;
