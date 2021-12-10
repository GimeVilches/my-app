import React, { Fragment, useState } from "react";
import { AddToCart, Finalizar, Home } from "../Alertas/Alertas";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, onAdd }) => {
  const initial = 0;
  const [count, setCount] = useState(initial);
  const [display, setDisplay] = useState("hidden");

  const handleSumCount = () => {
    if (count === stock) return;
    setCount(count + 1);
  };

  const handleSubtractCount = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const handleOnAdd = () => {
    onAdd(count);
    setCount(initial);
    setDisplay("block");
  };

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <Button variant="success" onClick={handleSubtractCount}>
          -
        </Button>{" "}
        <p style={{ margin: "0" }}>{count}</p>
        <Button variant="success" onClick={handleSumCount}>
          +
        </Button>{" "}
      </div>
      {display === "block" ? (
        <div className="space-y-2">
          <Finalizar />
          <Home />
        </div>
      ) : (
        <>
          <AddToCart
            setDisplay={setDisplay}
            handleOnAdd={handleOnAdd}
            count={count}
          />
        </>
      )}
    </Fragment>
  );
};

export default ItemCount;
