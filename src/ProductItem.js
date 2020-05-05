import React from "react";
import { useDispatch } from "react-redux";
import {addItem, removeItem } from "./actions.js";

/**
 * ProductItem: Displays individual product item 
 *  - Parent: ProductList
 */
function ProductItem({ item, id }) {
  const dispatch = useDispatch();

  const imageStyle = {
    width: "300px"
  }
  // console.log("inside productitem, id is: ", id);

  function add (id) {
    dispatch(addItem(id))
  }

  function remove (id) {
    dispatch(removeItem(id))
  }

  return (
    <div>
      <img src={item.image_url} alt="cart_image" style={imageStyle}></img>
      <h4>Item: {item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
      <button className="cartButton" onClick={() => add(id)}>Add to Cart</button>
      <button className="cartButton" onClick={() => remove(id)}>Remove from Cart</button>
    </div>
  )
}

export default ProductItem;