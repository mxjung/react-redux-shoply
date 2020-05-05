import {calculateValue, calculateTotalItems} from "./helperFunction";
const { products } = require('./data.json');

// cart: Object.keys(products).map(key => ({ [key]: { "count": 0 } })),
// cart: Object.keys(products).map(productId => ({ id: productId, "count": 0 })),

const INITIAL_STATE = {
  cartItems: {},
  cartValue: 0,
  totalItems: 0,
  inventory: products
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const cartCopy = { ...state.cartItems };
      cartCopy[action.payload] = (cartCopy[action.payload] || 0) + 1
      return {
        ...state,
        cartItems: cartCopy,
        totalItems: calculateTotalItems(cartCopy),
        cartValue: calculateValue(cartCopy, state.inventory)
        // cartValue:0
      }

    case "REMOVE_ITEM":
      const cartCopy2 = { ...state.cartItems };
      cartCopy2[action.payload] = (cartCopy2[action.payload] - 1);
      if (cartCopy2[action.payload] === 0) delete cartCopy2[action.payload];
      return {
        ...state,
        cartItems: cartCopy2,
        totalItems: calculateTotalItems(cartCopy2),
        cartValue: calculateValue(cartCopy2, state.inventory)
      }
    default:
      return state;
  }
}

export default rootReducer;

