import { Outlet, useLocation } from "react-router-dom"


const Categories = () => {

const location = useLocation();
// console.log(location);

  return location.pathname === "/categories" ? (
    <div>
      Categories
    </div>
  ) : (
    <Outlet />
  );
}

export default Categories
