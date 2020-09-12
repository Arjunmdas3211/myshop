import React from'react';

import './custom-button.styles.scss';


const CustomButton = ({ isGoogleSignIn, ...otherProps}) => (

    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in': ''}`} {...otherProps}>

    </button>
)
export default CustomButton;