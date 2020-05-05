import React from 'react';
import Cart from "./Cart"
import HomePage from "./HomePage"
import { Switch, Route } from "react-router-dom";



function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
