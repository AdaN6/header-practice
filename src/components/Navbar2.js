import React, { useState } from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "./dropdown";
import { navItems } from "./NavItems";

export const Navbar = () => {
     let boxClass =["main-menu menu-right menuq1"];

     if(isMenu) {
      boxClass.push('menuq2');
     } else {
      boxClass.push('');
     }

     let boxClassSubMenu = ["sub_menus"];

     if (isMenuSubMenu) {
      boxClassSubMenu.push('sub_menus_Active');
     } else {
      boxClassSubMenu.push('');
     }

     const [isMenuSubMenu, setMenuSubMenu] = useState(false);

      const toggleSubmenu = () => {
          setMenuSubMenu(isMenuSubMenu === false ? true : false);

      }


  return (
   <>

          <li
          onClick={toggleSubmenu}
          activeClassName="is-active"
          className="menu-item sub_menus_arrows"
        >
          <Link to="#">Category</Link>
          <ul className={boxClassSubMenu.join(' ')}>
            <li>
              <NavLink activeClassName="is-active" to="seafood">
                Seafood
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="maindish">
                Maindish
              </NavLink>
            </li>
          </ul>
        </li>
      
      
    </>
  );
};
