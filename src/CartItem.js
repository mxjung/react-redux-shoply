import React from 'react';
import "./CartItem.css";
import { useDispatch } from "react-redux";
import {addItem, removeItem } from "./actions.js";




function CartItem({ item, count, id }) {
  const dispatch = useDispatch();

  const imageStyle = {
    width: "100px"
  }

  function add (id) {
    dispatch(addItem(id))
  }

  function remove (id) {
    dispatch(removeItem(id))
  }

  

  return (
    <div className="cartItem">
      <img src={item.image_url} alt="cart_image" style={imageStyle}></img>

      <span>{item.name}</span>
      <span>{item.price}</span>
      <span>{item.description}</span>
      <span> Amount: {count}</span>
      <button onClick={() => add(id)}>Add to Cart</button>
      <button onClick={() => remove(id)}>Remove from Cart</button>
    </div>
  );
}

export default CartItem;
