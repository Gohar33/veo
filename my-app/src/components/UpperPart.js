import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import "./UpperPart.css";

export default function UpperPart() {
  return (
    <div className="upper-wrapper">
      <Navigation />
      <Home />
    </div>
  );
}
