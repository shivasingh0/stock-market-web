import React from "react";
import Typed from "react-typed";
import "./Typing.css";

function TypingAnimation() {
  return (
    <div className="typing">
      <div className="heading-text">
        <b>Welcome to Rio Capital Investment Advisor</b>
      </div>
      <p className="text">
        At Rio Capital, we believe in transforming financial aspirations into
        realities. Welcome to a world where strategic insights meet personalized
        investment solutions. Our commitment is simple – your financial success.
        Explore the possibilities, make informed decisions, and embark on a
        journey of prosperity with Rio Capital.
      </p>
      <b className="animated-text">
        <Typed strings={["Discover. Invest. Thrive."]} typeSpeed={20} loop />
      </b>
    </div>
  );
}

export default TypingAnimation;
