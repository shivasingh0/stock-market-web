import React from "react";
import Typed from "react-typed";
import "./Typing.css";

function TypingAnimation() {
  return (
    <div className="typing-container">
      <Typed className="text"
        strings={[
          `Rule number one: Don’t lose money. Rule number two: Don’t forget rule number one.`,
          "The most important quality for an investor is temperament, not intellect.",
          "An investment in knowledge pays the best interest.",
          `The biggest risk of all is not taking one.`,
        ]}
        typeSpeed={50}
        backSpeed={15}
        backDelay={1000} // Delay before starting to type again
        loop
      />
    </div>
  );
}

export default TypingAnimation;
