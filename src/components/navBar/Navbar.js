import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div class="logo">
        <img
          src="https://www.researchinn.com/assets/img/brand/logo.png"
          alt="logo"
        />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
