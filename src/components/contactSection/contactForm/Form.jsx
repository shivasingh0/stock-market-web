import React from "react";
import "./Form.css";

function Form() {
  return (
    <div>
      <div class="container">
        <div class="form-card">
          <a class="login">Request for callback</a>
          <div class="inputBox">
            <input type="text" required="required" />
            <span class="user">Full Name</span>
          </div>
          <div class="inputBox">
            <input type="text" required="required" />
            <span>Mob. Number</span>
          </div>

          <button class="enter">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
