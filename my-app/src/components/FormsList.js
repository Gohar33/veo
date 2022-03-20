import React from "react";
import { useLocation } from "react-router-dom";

export default function FormList({ contacts }) {
  const { state } = useLocation();
  const { name, surname, email, birth } = state;
  console.log("naaaame", name, surname, email, birth);
  return (
    <div>
      <div className="card">
        <p className="card-name">{name}</p>
        <p>{email}</p>
        <p>{surname}</p>
        <p>{birth}</p>
      </div>
    </div>
  );
}
