import React, { Fragment } from "react";
import { useCart } from "../../Context/CartContext";
import { BotonUno, ButtonClearCart, Finalizar } from "../Alertas/Alertas";
import "./Cart.css";

import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems, totalPrice } = useCart();
  const total = totalPrice();

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
                <div className="flexButtons">
                  <BotonUno to="/category" text="Seguir comprando" />
                  <ButtonClearCart clearCart={clearCart} />
                  <Finalizar />
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
