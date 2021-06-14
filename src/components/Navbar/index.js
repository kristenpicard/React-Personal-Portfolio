import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
          <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Main
        </Link>
        </li>
        <li className="nav-item">
        <Link
          to="/projects"
          className={
            window.location.pathname === "/projects"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Projects
        </Link>
        </li>
        </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
