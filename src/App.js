import React from 'react';

import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from './pages/Homepage/Homepage-component';
import ShopPage from './pages/shop/shop-component';
import  SignInSignUp  from "./pages/signin-signup/signin-signup-component";
import CheckoutPage from './pages/checkoutpage/checkout-component';

import Header from './components/header/header-component';

import { auth, createUserProfileDocument } from './firebase/firebase-utils';

import { connect } from 'react-redux';


import { setCurrentUser } from './redux/user/user-action';

import { createStructuredSelector } from 'reselect';

import './App.css';
class App extends React.Component  {
  
  unsubscribeFromAuth = null

  componentDidMount() {
    
    const { setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({        
                id: snapShot.id,
                ...snapShot.data()
               });          
        });
      }
      setCurrentUser(userAuth);
    });  
  }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
    
   render() {
    return (
      <div className='App'>
        <Header  />
        <Switch>
          <Route exact  path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser  
            ? <Redirect to='/'  /> 
            : <SignInSignUp />} />
        </Switch> 
      </div>
    );
  } 
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: setCurrentUser,

})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
