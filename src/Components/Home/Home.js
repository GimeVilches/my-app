import React from "react";
import imagen from "../Assets/Images/Portada.jpg";
import "./Home.css";
import { Card } from "react-bootstrap";
import Imcelular from "../Assets/Images/celulares.jpg";
import Imaccesorio from "../Assets/Images/accesorios.png";
import { BotonAcce, BotonCel } from "../Alertas/Alertas";

const Home = () => {
  return (
    <div className="Portada">
      <img className="imagenPortada" src={imagen} alt="portada" />
      <h1 className="tituloHome">
        Encontra todos los productos que buscas en nuestra tienda
      </h1>
      <div className="contenedorCard">
        <Card style={{ width: "20rem" }}>
          <Card.Img src={Imcelular} alt="imagenCard" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Entra y encontra los mejores celulares para vos.
            </Card.Text>

            <BotonCel text="Celulares"></BotonCel>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img src={Imaccesorio} alt="imagenCard" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Consegui tus accesorios preferidos para tu celu.
            </Card.Text>

            <BotonAcce text="Accesorios"></BotonAcce>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
