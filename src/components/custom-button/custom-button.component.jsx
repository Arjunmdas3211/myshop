import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`custom-button ${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    }`}
    {...otherProps}
  ></button>
);
export default CustomButton;
