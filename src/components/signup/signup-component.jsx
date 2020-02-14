import React from 'react';
import './signup-styles.scss';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils'

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    } 

    handleSubmit= async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } =this.state;

        if (password !== confirmPassword ) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, {displayName});

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });

        } catch (error) {

            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
              } else {
                alert(errorMessage);
              }
            console.log(error)
        }          
        
    }
    render() {
        const { displayName, email, password, confirmPassword } =this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    onChange={this.handleChange}
                    name='displayName'
                    type='text'
                    value={displayName}
                    label='Display Name'
                    required
                    />
                    <FormInput 
                    onChange={this.handleChange}
                    name='email'
                    type='email'
                    value={email}
                    label='Email'
                    required
                    />
                    <FormInput 
                    onChange={this.handleChange}
                    name='password'
                    type='password'
                    value={password}
                    label='Password'
                    required
                    />
                    <FormInput 
                    onChange={this.handleChange}
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>
                        sign up
                    </CustomButton>

                </form>

            </div>
        );
    }
}

export default SignUp;