import React, { Fragment, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const promise = new Promise((resolve, reject) => {
        const products = {
          id: 1,
          title: "LG K 62 128 GB",
          description:  "Memoria interna: 128 GB",
          totalDescription: " Dispositivo liberado para que elijas la compañía telefónica que prefieras.Pantalla TFT de 6.6.Tiene 4 cámaras traseras de 48Mpx/5Mpx/2Mpx/2Mpx. Cámara delantera de 28Mpx. Batería de 4000mAh. Memoria interna de 128GB.Con sensor de huella dactilar.", 
          price: " $ 35999",
          stock: 8,
          pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_973809-MLA48041270287_102021-F.webp",
        };
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
  
      promise
        .then((res) => {
          setItems(res);
        })
        .catch(() => {
          console.log("Error al cargar");
        })
        .finally(() => {
          console.log("Se cargó correctamente");
        });
    }, []);
  
    return (
      <Fragment>
        {items && items.id ? (
          <ItemDetail items={items} />
        ) : (
          <h1 className="text-center">Cargando...</h1>
        )}
      </Fragment>
    );
  };
  
  export default ItemDetailContainer;