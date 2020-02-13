import React from 'react';
import './signin-styles.scss';
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';
import { auth, signInWithGoogle } from '../../firebase/firebase-utils';

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
    }
        
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
                this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className='signin'> 
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
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