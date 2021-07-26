import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

//stylings
const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  ButtonSize,
}) => {
  //   if the gutting component("STYLES") has a button style, then if that is true then I want it just to be whatever the button style that we created for it. if that is not true, I want to set the value to styles. the first option in STYLES array
  // if you dont have any of the classes applied to it, its automatically by default going to apply styles the first position, it would be the "btn--primary" by default.
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  //   whatever you put inside of the button, it will render
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        //Why use ` (backticks) and $ ?    https://betterprogramming.pub/javascript-how-backticks-work-de269e0fb8ba

        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
