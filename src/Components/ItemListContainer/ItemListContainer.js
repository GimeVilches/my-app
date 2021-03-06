import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import app from "../Firebase/Index";
import { useParams } from "react-router";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    const db = getFirestore(app);
    const itemsCollection = collection(db, "items");
    const q = catId
      ? query(itemsCollection, where("category", "==", catId))
      : query(itemsCollection, orderBy("category"));
    getDocs(q).then((snapshot) => {
      if (catId === undefined) {
        setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } else {
        let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setItems(data);
      }
    });
  }, [catId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
