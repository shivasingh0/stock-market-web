import React from "react";
import "./Navbar.css";
import {AiFillMobile} from "react-icons/ai"

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
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div>
        <div>
         <AiFillMobile/> call now: +91xxxxxxxxxx
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
