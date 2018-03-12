import React from "react";
import "./Labeled.css";

const Labeled = ({ children, label }) => (
  <label className="Labeled">
    {label}: {children}
  </label>
);

export default Labeled;
