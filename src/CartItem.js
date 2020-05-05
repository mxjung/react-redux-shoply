import React from 'react';
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./actions.js";


/**
 * CartItem: Component that shows one single cart item
 *  - Parent Component: Cart
 */

function CartItem({ item, count, id }) {
  const dispatch = useDispatch();

  const imageStyle = {
    width: "100px"
  }

  function add(id) {
    dispatch(addItem(id))
  }

  function remove(id) {
    dispatch(removeItem(id))
  }

  return (
    <div className="cart-item">
      <img src={item.image_url} alt="cart_image" style={imageStyle}></img>
      <div className="item-details">
        <span>Item: {item.name}</span>
        <span>Price: ${item.price}</span>
        <span>{item.description}</span>
      </div>
      <div className="cart-item-buttons">
        <button className="cart-item-button" onClick={() => add(id)}> + </button>
        <button className="cart-item-button" onClick={() => remove(id)}> - </button>
      </div>
      <div className="cart-item-amount">
        <span> Amount: {count}</span>
      </div>
    </div>
  );
}

export default CartItem;
