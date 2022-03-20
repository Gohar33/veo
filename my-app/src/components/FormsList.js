import React from "react";
import { useLocation } from "react-router-dom";
import "./Forms.css";

export default function FormList({ contacts }) {
  const { state } = useLocation();
  const { name, surname, email, birth } = state;

  const date = new Date(birth);
  const birthYear = date.getFullYear();
  const today = new Date(Date.now());
  const thisYear = today.getFullYear();
  const age = thisYear - birthYear;

  return (
    <div>
      <div className="card">
        <p className="card-name">
          <span>Name:</span> {name}
        </p>
        <p className="card-name">
          <span>Surname: </span>
          {surname}
        </p>
        <p className="card-name">
          <span>Email:</span> {email}
        </p>
        <p className="card-name">
          <span>Age:</span> {age}
        </p>
      </div>
    </div>
  );
}
