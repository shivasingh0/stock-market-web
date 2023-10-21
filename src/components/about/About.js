import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      {/* Left Container */}
      <div className="left animate__animated animate__backInLeft">
        <h1 className="heading">COMPANY OVERVIEW</h1>
        <p className="about-text">
          At Rio Capital, we are more than financial advisors; we are your
          partners in prosperity. With a legacy of expertise and a
          forward-thinking approach, we navigate the complexities of the stock
          market to unlock opportunities for our clients. Our commitment to
          excellence, innovation, and client success sets us apart. Trust Rio
          Capital to be your guide in the dynamic world of finance.
        </p>
      </div>

      {/* Right Container */}
      <div className="right animate__animated animate__backInRight">
        <img src="https://www.researchinn.com/assets/img/theme/aboutimg1.png" alt="" />
      </div>
    </div>
  );
}

export default About;
