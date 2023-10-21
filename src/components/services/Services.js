import React from "react";
import "./Services.css";
import Cards from "./cards/Cards";

function Services() {
  return (
    <div className="service-container">
      <hr style={{ marginTop: "8rem" }} />
      <div>
        <h1 class="services-text" data-text="Awesome">
          <span class="actual-text">&nbsp;services&nbsp;</span>
          <span aria-hidden="true" class="hover-text">
            &nbsp;services&nbsp;
          </span>
        </h1>
      </div>
      {/* Cards */}
      <div className="flex-cards">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <hr style={{ marginTop: "8rem" }} />
    </div>
  );
}

export default Services;
