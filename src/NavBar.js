import React from 'react';
import './NavBar.css';
import ProductList from "./ProductList";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";


function NavBar() {
  const totalItems = useSelector((st)=>st.totalItems)

  return (
    <nav>
      <ul>
        <li><NavLink to="/" >Shoply</NavLink></li>
        <li><NavLink to="/cart"  >My Cart ({totalItems})</NavLink></li>

      </ul>



    </nav>
  );
}

export default NavBar;
