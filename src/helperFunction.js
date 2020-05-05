/**
 * Computes total cost of all items in cartItems obj in state
 */
function calculateValue(cartCopy, inventory) {
  let amount = 0;
  Object.keys(cartCopy).forEach((key) => {
    if (key in inventory) {
      amount = amount + inventory[key].price * cartCopy[key]
    }
  })
  return amount
}

/**
 * Computes total number of all items in cartItems obj in state
 */
function calculateTotalItems(cartCopy) {
  let total = 0;
  Object.keys(cartCopy).forEach(key => {
    total = total + cartCopy[key]
  })
  return total
}


export { calculateValue, calculateTotalItems }