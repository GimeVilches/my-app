import { useState, useEffect, Fragment } from 'react';
import "./ItemCount.css"
import { Button } from "react-bootstrap";

function ItemCount({stock, onAdd, initial }) {
    const [count, setCount] = useState(initial);
   
    const increase = () => {
      if (count < stock) {
        setCount(count + 1);
        
      }
    };
  
    const decrease = () => {
      if (count > initial) {
        setCount(count - 1);
        
      }
    };
  
    useEffect(() => {
      onAdd(count);
    }, [count]);
  
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
          <Button variant="danger" onClick={decrease}>
            -
          </Button>{" "}
          <p style={{ margin: "0" }}>{count}</p>
          <Button variant="success" onClick={increase}>
            +
          </Button>{" "}
        </div>
      </Fragment>
  
    );
  }
  
  export default ItemCount;
  