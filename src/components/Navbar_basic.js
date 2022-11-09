import React from 'react'
import { NavLink } from 'react-router-dom';
import "./header.css"
import Dropdown2 from "./Dropdown2";

const Navbar_basic = () => {
  return (
    <div>
      <ul class="recipe_header">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="category_button">
          <NavLink to="#">Category</NavLink>
            <ul className="submenu">
            <li><Dropdown2 /></li>

            </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar_basic
