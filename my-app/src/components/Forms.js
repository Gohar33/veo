import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

export default function Forms({ addContact }) {
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
    navigate(`/result`, {
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
        className="d-flex flex-column m-5 form-styling"
        onSubmit={handleSubmit}
      >
        <label>
          First Name:
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
          Last Name:
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
          Your Email:
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
          Birth date :
          <input
            type="date"
            id="birthday"
            name="birth"
            value={contactInfo.birth}
            onChange={handleChange}
            required
          />
        </label>
        <div className="d-flex  bb">
          <button
            type="button"
            value="Reset form"
            className="submit-button"
            onClick={reset}
          >
            Reset
          </button>
          <button type="submit" value="Submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
