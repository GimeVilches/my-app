import { useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Alertas.css";
import DeleteIcon from "@mui/icons-material/Delete";

export const Alert = () => {
  Swal.fire({
    position: "bottom-end",
    title: "Tu producto se añadió al carrito",
    width: "20%",
    icon: "success",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 2000,
    toast: true,
  });
};
export const AddToCart = ({ handleOnAdd }) => {
  return (
    <button
      className="agregar"
      onClick={() => {
        handleOnAdd();
        Alert();
      }}
    >
      Agregar al carrito
      <ShoppingCartIcon />
    </button>
  );
};

export const BotonUno = ({ text }) => (
  <Link to="/">
    <button className="botonUno">{text}</button>
  </Link>
);
export const ButtonClearCart = ({ clearCart }) => (
  <button onClick={clearCart} className="botonVaciar">
    Vaciar carrito
    <DeleteIcon />
  </button>
);

export const RemoveIcon = () => <DeleteIcon />;

export const Home = () => {
  return (
    <Link to="/" className="">
      <button className="botonFinalizar">
        <span className="">Seguir Comprando</span>
      </button>
    </Link>
  );
};

export const Finalizar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Link to="/cart" className="">
      <button className="botonFinalizar" onClick={handleShow}>
        <span className="">Terminar compra</span>
      </button>
      {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Muchas Gracias por su compra!!</Modal.Body>
        <Modal.Footer>
          <Button className="botonFinalizar" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Link>
  );
};
export const BotonCel = ({ text }) => (
  <Link to="/category/celular">
    <button className="botonUno">{text}</button>
  </Link>
);

export const BotonAcce = ({ text }) => (
  <Link to="/category/accesorio">
    <button className="botonUno">{text}</button>
  </Link>
);
