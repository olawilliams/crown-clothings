import React from 'react';
import { connect } from 'react-redux';
import './signup-styles.scss';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import { signUpStart } from '../../redux/user/user-action'

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
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } =this.state;

        if (password !== confirmPassword ) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password});
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

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials ))
});
export default connect(null, mapDispatchToProps)(SignUp);