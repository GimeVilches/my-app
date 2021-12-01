import React, { useState, useContext } from "react";
import {useCart} from "../../Context/CartContext";

const Cart = () => {
    const { products } = useCart()
    console.log(products)


    
    return (
        <div>
            <h1>Carrito de compra</h1>
        </div>
    )
}

export default Cart
