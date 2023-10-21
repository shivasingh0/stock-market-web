import React from "react";
import Form from "./contactForm/Form";
import "./ContactSection.css";
import { FaUserLarge } from "react-icons/fa6";
import { AiTwotoneStar } from "react-icons/ai";

function ContactSection() {
  return (
    <div className="contactSection-container">
      {/* Left */}
      <div className="people-feedback">
        <h5>CUSTOMER REVIEWS</h5>
        <h1>WHAT PEOPLE SAY!</h1>
        <div className="user-icon">
          <FaUserLarge />
        </div>
        <h3 className="employee-name">Name of employee</h3>
        <div className="rating">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </div>
        <p className="comment">
          I am K V Rama Krishna joined in your company as a client for HNI
          Services in the last week of December, 2018. I got the training about
          the products and slowly doing this business. Since i am new to this
          field, i afraid about this market. But your company is extending their
          full support and co-operation about the markets and clarifying all my
          doubts on day-to-day basis. Thanks to your support. I am once again
          thankful for your full support.
        </p>
      </div>
      {/* Right */}
      <div className="contact-form">
        <Form />
      </div>
    </div>
  );
}

export default ContactSection;
