import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Dropdown2 = () => {
  return (
    <div>
      <ul class="recipe_header">
        <li>
          <Link to="catogories/seafood">Seafood</Link>
        </li>
        <li>
          <Link to="catogories/maindish">Maindish</Link>
        </li>
        <li>
          <Link to="categories/vegetarian">Vegetarian</Link>
        </li>
        <li>
          <Link to="catogories/dessert">Dessert</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown2
