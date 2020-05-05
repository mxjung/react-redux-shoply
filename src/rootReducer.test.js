import rootReducer from "./rootReducer";
const { products } = require('./data.json');

test('test rootReducer is function', () => {
  expect(typeof rootReducer).toEqual("function");
});

test('Test that rootReducer is pure function', () => {
  const oldState = {
    cartItems: {},
    cartValue: 0,
    totalItems: 0,
    inventory: {}
  }

  const oldStateCopy = {...oldState, cartItems: {}, inventory: {}};

  const newState = rootReducer(oldState, {type: "ADD_ITEM"});

  // Works
  // expect(oldState.cartValue).toBe(0);
  // expect(oldState.totalItems).toBe(0);
  // expect(Object.keys(oldState.cartItems).length).toBe(0);

  expect(oldState).toEqual(oldStateCopy);
});

// Check for add_item and remove_item