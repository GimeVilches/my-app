import "./ItemListContainer.css";

import {Fragment, useState, useEffect } from 'react'
import ItemList from "./ItemList";
import { products } from "../Products";
import { useParams } from "react-router";
import Spinner from "../Spinner/spinner";




const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    setLoader(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    promise
      .then((res) => {
        catId ? setItems(res.filter((items) => items.category === catId)) :
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => (
        setLoader(false)
      ));
  },[catId]);

  return ( loader ? <Spinner /> :
    <Fragment>
      <div className="container-list">
        <ItemList items={items} />
      </div>
    </Fragment>
  );
};

export default ItemListContainer;
