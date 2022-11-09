import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Dropdown2 = () => {
  return (
    <div class="recipe_header">
      <ul>
        <li>
          <Link to="seafood">Seafood</Link>
        </li>
        <li>
          <Link to="maindish">Maindish</Link>
        </li>
        <li>
          <Link to="seafood">Seafood</Link>
        </li>
        <li>
          <Link to="dessert">Dessert</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown2
