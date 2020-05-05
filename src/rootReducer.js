const { products } = require('./data.json');
// import * as data from './data.json';
// const { products } = data;

// cart: Object.keys(products).map(key => ({ [key]: { "count": 0 } })),

const INITIAL_STATE = {
  cart: [],
  inventory: products
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // action.payload = id
      return {
        ...state,
        cart: state.cart.map(itemObj => {
          if (itemObj.id === action.payload) {
            return { [itemObj.id]: { count: state.cart[itemObj.id].count + 1 } }
          } else {
            return { [action.payload]: { count: 1 } };
          }
        })
      }

    case "REMOVE_ITEM":
      return
    default:
      return state;
  }
}

export default rootReducer;

// cart: [...state.cart, {id: action.payload, item: state.inventory[action.payload], itemCount: 1}]

// {cart: [ {id1: {count: 1}}, {id2: {count: 3}} ], inventory: {keys: {}, keys: {}} }