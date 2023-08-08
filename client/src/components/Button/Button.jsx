import React from "react";
import "./button.css";

const Button = ({ onclick, children }) => {
  return (
    <button className="button" onclick={onclick}>
      {children}
    </button>
  );
};

export default Button;
