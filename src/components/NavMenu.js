//This is the navigation menu component#
//This is displayed on all the pages
// Link from react roter dom is used to create links to react routes
import React from "react";
import { Link } from "react-router-dom";
function NavMenu() {
  return (
    <>
      <ul>
        <li id="LogoName">
          <img
            src="./logo.jpg"
            alt="Pen'n'Cils logo "
            style={{ width: "3rem", borderRadius: "50%" }}
          />
          <Link to="/">Pen'n'cils</Link>
        </li>

        <ul id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </ul>
    </>
  );
}
export default NavMenu;
