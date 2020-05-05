import {calculateValue, calculateTotalItems} from "./helperFunction";
const { products } = require('./data.json');

const INITIAL_STATE = {
  cartItems: {},
  cartValue: 0,
  totalItems: 0,
  inventory: products
};

//******* take out cartValue and have components solve this using cartItems

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
      }

    case "REMOVE_ITEM":
      const cartCopy2 = { ...state.cartItems };
      // ********** if key doesn't exist, we will get NaN (give conditional to check key exists)
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

