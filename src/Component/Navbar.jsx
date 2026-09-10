import { NavLink } from "react-router-dom";

import "../css/Navbar.css"
// import Alone from "../Pages/Alone.jsx"
import About from "../Pages/About.jsx"

function Navbar() {
  return (
    <>
       <div className="logo">
          MyWebsite
        
      <nav className="navbar">
     

        <div className="nav-link">
          <NavLink to="/" end>
            Home
          </NavLink>

          {/* <NavLink to="/Categories">
            Categories
          </NavLink> */}

          <NavLink to="/AllBooks">
            All Books
          </NavLink>
          <NavLink to="/Popular_Books">
          Popular Books
          </NavLink>

 <NavLink to="/Contact">
    Contact
 </NavLink>
  

        <NavLink to="/admin/login">
          Admin Login
        </NavLink>
        <NavLink to="/admin/register">
          Admin Register
        </NavLink>
<NavLink to="/register">
  User Register
</NavLink>

<NavLink to="/login">
  User Login
</NavLink>
        </div>
      </nav>
  </div>
    </>
  );
}

export default Navbar;