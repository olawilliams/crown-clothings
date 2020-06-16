import React from 'react';
import SignIn from '../../components/signin/signin-component';
import SignUp from '../../components/signup/signup-component';

import './signin-signup-styles.scss';

const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
);

export default SignInSignUp;

