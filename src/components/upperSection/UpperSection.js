import React from "react";
import "./UpperSection.css";
import TypingAnimation from "./typingAnymation/TypingAnimation";
import "animate.css";
import CrouselImage from "./crousel/CrouselImage";

function UpperSection() {
  return (
    <div className="container">
      <div className="left-section">
          <TypingAnimation />
      </div>
      <div className="right-section">
        <CrouselImage/>
      </div>
    </div>
  );
}

export default UpperSection;
