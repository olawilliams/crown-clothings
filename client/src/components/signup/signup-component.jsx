import React, { useState } from 'react';
import { connect } from 'react-redux';
import './signup-styles.scss';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import { signUpStart } from '../../redux/user/user-action'

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials ] = useState({
     displayName: '',
     email: '',
     password: '',
     confirmPassword: ''
});

    const { displayName, email, password, confirmPassword } = userCredentials;

   const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value});
    } 

    const handleSubmit= async event => {
        event.preventDefault();
        
        if (password !== confirmPassword ) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password});
    
    }
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    onChange={handleChange}
                    name='displayName'
                    type='text'
                    value={displayName}
                    label='Display Name'
                    required
                    />
                    <FormInput 
                    onChange={handleChange}
                    name='email'
                    type='email'
                    value={email}
                    label='Email'
                    required
                    />
                    <FormInput 
                    onChange={handleChange}
                    name='password'
                    type='password'
                    value={password}
                    label='Password'
                    required
                    />
                    <FormInput 
                    onChange={handleChange}
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>
                        create account
                    </CustomButton>

                </form>

            </div>
        );
    }


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials ))
});
export default connect(null, mapDispatchToProps)(SignUp);