import React from 'react';
import './signin-styles.scss';
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';
import { signInWithGoogle } from '../../firebase/firebase-utils'

class SignIn extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.handleChange)
    }
        
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    render() {
        return (
            <div className='signin'> 
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form>
                <FormInput handleChange={this.handleChange}
                    name='email' 
                    type='email' 
                    value={this.state.email}
                    label='email'
                    required 
                />
                <FormInput handleChange={this.handleChange}
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    label='password'
                    required 
                 />
                 <div className='buttons'>
                 <CustomButton 
                    type='submit'>             
                    Sign in
                </CustomButton>
                <CustomButton 
                    onClick={ signInWithGoogle } isGoogleSignIn>            
                    Sign in with Google 
                </CustomButton>
                 </div>          
            </form>

            </div>
        );
    }
}

export default SignIn;