import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../stories/Button";
import "./Forms.css";

export default function Forms() {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    surname: "",
    email: "",
    birth: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/result/${contactInfo.surname}`, {
      state: {
        name: contactInfo.name,
        surname: contactInfo.surname,
        email: contactInfo.email,
        birth: contactInfo.birth,
      },
    });
  };

  const reset = () => {
    setContactInfo({
      name: "",
      surname: "",
      email: "",
      birth: "",
    });
  };

  return (
    <div>
      <form
        action="/result"
        method="GET"
        className="d-flex flex-column m-5 flex-wrap align-items-center form-styling"
        onSubmit={handleSubmit}
      >
        <label>
          First Name:&nbsp;&nbsp;
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:&nbsp;&nbsp;
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={contactInfo.surname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Email:&nbsp;&nbsp;
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={contactInfo.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Birth date:&nbsp;&nbsp;
          <input
            type="date"
            id="birthday"
            name="birth"
            value={contactInfo.birth}
            onChange={handleChange}
            required
          />
        </label>
        <div className="d-flex button-direction">
          <button
            type="button"
            value="Reset form"
            className="submit-button m-3"
            // className="storybook-button storybook-button--primary storybook-button--large  m-3"
            onClick={reset}
          >
            Reset
          </button>
          <button type="submit" value="Submit" className="submit-button m-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
