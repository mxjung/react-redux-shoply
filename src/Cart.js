import React from 'react';
import { useSelector } from "react-redux";
import CartItem from "./CartItem"


/**
 * Cart: Component that shows all items inside cartItems state
 *  - Parent Component: Routes
 */
function Cart() {
  const cart = useSelector(st => st);

  return (
    <div>
      <h1>My Cart:</h1>

      <h2>There are {cart.totalItems} items in your Cart</h2>
      <div className="cartContainer">
        {Object.keys(cart.cartItems).map(id => (
          <CartItem item={cart.inventory[id]} count={cart.cartItems[id]} id={id} />
        ))}
      </div>
    </div>

  );
}

export default Cart;
