import React from'react';

import './custom-button.styles.scss';

// eslint-disable-next-line react/prop-types
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (

    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in': ''}`} {...otherProps}>
{children}
    </button>
)
export default CustomButton;