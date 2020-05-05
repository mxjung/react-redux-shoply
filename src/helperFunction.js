
function calculateValue(cartCopy, inventory) {
  // console.log("this is cartCopy inside calcVal",cartCopy);
  // console.log("this is inventory inside calcVal",inventory);
  let amount = 0;
  Object.keys(cartCopy).forEach((key) => {

    amount = amount + inventory[key].price * cartCopy[key]
  })

  return amount
}

function calculateTotalItems(cartCopy){
  let total = 0;
Object.keys(cartCopy).forEach(key => {
    total = total + cartCopy[key]
})
return total
}


export  {calculateValue, calculateTotalItems}