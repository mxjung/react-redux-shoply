import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import ProductItem from "./ProductItem";
import { v4 as uuidv4 } from "uuid";

/**
 * ProductList: Displays all items inside state inventory (products)
 *  - Parent: Routes
 */
function ProductList () {
  const inventory = useSelector(store => store.inventory, shallowEqual);
  return (
    <div>
      {Object.keys(inventory).map(id => 
        <ProductItem key={uuidv4()} item={inventory[id]} id={id}/>
        )}
    </div>
  )
}

export default ProductList;