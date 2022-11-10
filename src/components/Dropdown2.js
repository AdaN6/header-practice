import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Dropdown2 = () => {
  return (
    <div>
      <ul class="drop-down-submenu">
        <li>
          <Link to="categories/seafood">Seafood</Link>
        </li>
        <li>
          <Link to="categories/maindish">Maindish</Link>
        </li>
        <li>
          <Link to="categories/vegetarian">Vegetarian</Link>
        </li>
        <li>
          <Link to="categories/dessert">Dessert</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown2
