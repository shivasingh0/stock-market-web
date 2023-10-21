import React from "react";
import "./PricingCard.css";

function PricingCard() {
  return (
    <div className="pricingCard-container">
      {/* card - 1 */}
      <div class="card">
        <p className="basic-services">BASIC SERVICES</p>
        <div class="card__content">
          <p class="card__title">Prices</p>
          <p class="card__description">
            <p>Monthly- ₹11800</p>
            <p>Quarterly- ₹35400</p>
          </p>
        </div>
      </div>
      {/* card - 2 */}
      <div class="card">
        <p className="basic-services">ULTRA SERVICES</p>
        <div class="card__content">
          <p class="card__title">Prices</p>
          <p class="card__description">
            <p>Monthly- ₹23600</p>
            <p>Quarterly- ₹59000</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
