import React, { Fragment } from "react";
import { useCart } from "../../Context/CartContext";
import { BotonUno, ButtonClearCart, Finalizar } from "../Alertas/Alertas";
import "./Cart.css";
import ItemCart from "./ItemCart";
import app from "../Firebase/Index";
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { useState } from "react";
import "../Alertas/Alertas.css";
import { AddToCart } from "../Alertas/Alertas";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems, totalPrice } = useCart();
  const total = totalPrice();
  const [buttonState, setButtonState] = useState(true);
  const [formInfo, setFormInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  function checkOut() {
    setButtonState(false);
    const order = {
      buyer: formInfo,
      items: cart,
      total: total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((data) => {
      clearCart(data);
      Swal.fire({
        title: "Compra realizada con éxito",
        text: `ID de la compra es: ${data.id}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    });
    // .catch((e) => console.log(e));

    // .catch((e) => console.log(e));
    // cart.forEach(item => {
    //   const itemRef=data (db , "items", item, id),
    //   batch.update(itemRef, item.stock - item.quantity);

    // });
  }
  return (
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: "50em",
          height: "100%",
        },
      }}
    >
      <div elevation={24}>
        <div className="">
          {cartWidgetItems() > 0 ? (
            cart.map((i) => (
              <>
                <ItemCart
                  key={i.item.id}
                  title={i.item.title}
                  price={i.item.price}
                  description={i.item.description}
                  img={i.item.img}
                  id={i.item.id}
                  quantity={i.quantity}
                />
              </>
            ))
          ) : (
            <>
              <p className="sinProductos">
                No se encuentran productos en el Carrito
              </p>
              <BotonUno to="/products" text="Ir a la tienda" />
            </>
          )}
          {cartWidgetItems() > 0 && (
            <>
              <Fragment>
                <div
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      width: "30em",
                      height: "10%",
                    },
                  }}
                >
                  <div elevation={24} className="totalContainer">
                    <div className="flexTotal">
                      <p className="txtTotal">Total</p>
                      <hr className="hrCart" />
                      <p className="txtTotalNum">${total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <form>
                  Ingrese sus datos para efectuar la Compra
                  <label>
                    Nombre Completo:
                    <input
                      type="text"
                      name="name"
                      value={formInfo.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Número de Teléfono:
                    <input
                      type="text"
                      name="phone"
                      value={formInfo.phone}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    E-mail:
                    <input
                      type="text"
                      name="email"
                      value={formInfo.email}
                      onChange={handleChange}
                    />
                  </label>
                  {buttonState ? (
                    <button
                      className="botonFinalizar"
                      disabled={
                        !(formInfo.name && formInfo.phone && formInfo.email)
                      }
                      type="button"
                      onClick={checkOut}
                    >
                      FINALIZAR COMPRA
                    </button>
                  ) : (
                    <div className="loading"></div>
                  )}
                </form>
                <div className="flexButtons">
                  <ButtonClearCart clearCart={clearCart} />

                  <BotonUno to="/category" text="Seguir comprando" />
                </div>
              </Fragment>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
