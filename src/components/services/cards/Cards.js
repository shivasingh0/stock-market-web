import React from "react";
import "./Cards.css";
import Buttons from "./buttons/Buttons";

function Cards() {
  return (
    <div>
      <div class="book">
        <p>
          <span>
            Elevate your stock options trading with our Stock Option Precision
            service. Crafted for both novice and experienced traders, this
            service specializes in Intraday and Ultra Short-Term strategies.
          </span>
          <Buttons />
        </p>
        <div class="cover">
          <p>
            <span>Service Name: Stock Option</span>
            <hr />
            <span>Service Risk: HIGH </span>
            <hr />
            <span>Service Type: Intraday/Ultra Short Term </span>
            <hr />
            <span>Minimum Investment Required: Rs 50,000</span>
            <hr />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
