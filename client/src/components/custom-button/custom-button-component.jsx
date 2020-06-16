import React from 'react';

import './custom-button-styles.scss';

const CustomButton = ({ children, continueShopping, isGoogleSignIn, inverted, ...OtherProps}) => (
    <button
    className={ `${ inverted ? 'inverted' : '' }
         ${isGoogleSignIn ? 'google-sign-in' : ''} 
         ${continueShopping ? 'continue-shopping' : ''}
         custom-button`}
     {...OtherProps}>
        {children}
    </button>
);

export default CustomButton;