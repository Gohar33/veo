import React from "react";
import "./Forms.css";

export default function Forms() {
  return (
    <div>
      <form
        action="/result"
        method="GET"
        className="d-flex flex-column m-5 form-styling"
      >
        <label>
          First Name:
          <input type="text" name="first-name" required />
        </label>
        <label>
          Last Name:
          <input type="text" name="last-name" required />
        </label>
        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Birth date :
          <input type="text" name="name" required />
        </label>
        <button type="submit" value="Submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
