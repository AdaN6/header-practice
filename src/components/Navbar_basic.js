import {useCallback, useState} from 'react'
import { NavLink } from 'react-router-dom';
import "./header.css"
import Dropdown2 from "./Dropdown2";

const Navbar_basic = () => {
    const [isShown, setIsShown] = useToggle();

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={setIsShown}>
          {isShown ? <Dropdown2 /> : !(<Dropdown2 />)}
          <NavLink to="categories"> Category </NavLink>
        </li>
      </ul>
    </div>
  );
}

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle]
}

export default Navbar_basic
