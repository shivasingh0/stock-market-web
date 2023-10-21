import React from 'react' 
import './Pricing.css'
import PricingCard from './Cards/PricingCard'

function Pricing() {
  return (
    <div>
      <div>
        <h1 class="pricing-text" data-text="Awesome">
          <span class="actual-text">&nbsp;pricing&nbsp;</span>
          <span aria-hidden="true" class="pricing-hover-text">
            &nbsp;pricing&nbsp;
          </span>
        </h1>
      </div>
      <div>
        <PricingCard/>
      </div>
    </div>
  )
}

export default Pricing
