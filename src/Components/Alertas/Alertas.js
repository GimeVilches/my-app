import React from "react";
import { Button } from "react-bootstrap";
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
    <Button className="botonUno">{text}</Button>
  </Link>
);
export const ButtonClearCart = ({ clearCart }) => (
  <Button onClick={clearCart} className="botonVaciar">
    Vaciar carrito
    <DeleteIcon />
  </Button>
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
  return (
    <Link to="/cart" className="">
      <button className="botonFinalizar">
        <span className="">Terminar compra</span>
      </button>
    </Link>
  );
};
