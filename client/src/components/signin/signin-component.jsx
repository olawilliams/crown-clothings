import React, { useState } from 'react';
import { connect } from 'react-redux';
import './signin-styles.scss';
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';

import {googleSignInStart, emailSignInStart } from '../../redux/user/user-action';


const SignIn = ({ emailSignInStart, googleSignInStart } ) => {
    
    const [userCredentials, setUserCredentials] = useState({
            email: '',
            password: ''
        })

       const { email, password } = userCredentials;

   const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }
        
   const handleSubmit = async event => {
        event.preventDefault();
        

       emailSignInStart(email, password);
    };
   
        return (
            <div className='signin'> 
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange}
                    name='email' 
                    type='email' 
                    value={email}
                    label='email'
                    required 
                />
                <FormInput handleChange={handleChange}
                    name='password' 
                    type='password' 
                    value={password} 
                    label='password'
                    required 
                 />
                 <div className='buttons'>
                 <CustomButton 
                    type='submit'>             
                    Sign in
                </CustomButton>
                <CustomButton 
                    type='button'
                    onClick={ googleSignInStart } isGoogleSignIn>            
                     sign in with google
                </CustomButton>
                 </div>          
            </form>

            </div>
        );
    }



const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);