import React, {useState} from 'react'
import "./header.css";
import { Link } from 'react-router-dom';
import Dropdown from "./dropdown";
import { navItems } from "./NavItems";

export const Navbar = () => {


const [dropdown, setDropdown] = useState(false);


  return (
    <div>
      <nav>
        <ul className="recipe_header">
          <li>Home</li>
          <li>Categories</li>
          <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Categories") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
       
      
         
        </ul>
      </nav>
    </div>
  );
}
