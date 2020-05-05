const { products } = require('./data.json');

// cart: Object.keys(products).map(key => ({ [key]: { "count": 0 } })),

const INITIAL_STATE = {
  // cart: [],
  cart: Object.keys(products).map(productId => ({ id: productId, "count": 0 })),
  inventory: products
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: state.cart.map(itemObj => {
          if (itemObj.id === action.payload) {
            return { id: itemObj.id, count: itemObj.count + 1 };
          } else {
            return { ...itemObj };
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