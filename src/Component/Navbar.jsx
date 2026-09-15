import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        📚 My eBook
      </div>

      {/* Navigation */}
      <div className="nav-links">

        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/AllBooks">
          All Books
        </NavLink>

        <NavLink to="/PopularBooks">
          Popular Books
        </NavLink>

        <NavLink to="/Contact">
          Contact
        </NavLink>


        {/* ================= LOGIN ================= */}

        <div className="nav-dropdown">

          <button className="dropdown-btn">
            🔐 Login
            <span>▼</span>
          </button>

          <div className="dropdown-menu">

            <NavLink to="/login">
              👤 User Login
            </NavLink>

            <NavLink to="/admin/login">
              🛡️ Admin Login
            </NavLink>

          </div>

        </div>


        {/* ================= SIGN UP ================= */}

        <div className="nav-dropdown">

          <button className="dropdown-btn signup-btn">
            ✨ Sign Up
            <span>▼</span>
          </button>

          <div className="dropdown-menu">

            <NavLink to="/register">
              👤 User Sign Up
            </NavLink>

            <NavLink to="/admin/register">
              🛡️ Admin Sign Up
            </NavLink>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;