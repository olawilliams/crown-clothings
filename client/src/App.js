import React from 'react';

import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from './pages/Homepage/Homepage-component';
import ShopPage from './pages/shop/shop-component';
import  SignInSignUp  from "./pages/signin-signup/signin-signup-component";
import CheckoutPage from './pages/checkoutpage/checkout-component';

import Header from './components/header/header-component';

import { connect } from 'react-redux';

import { checkUserSession } from './redux/user/user-action';

import { selectCurrentUser } from './redux/user/user-selector';

import { createStructuredSelector } from 'reselect';

import './App.css';
class App extends React.Component  {
  
  unsubscribeFromAuth = null

  componentDidMount() {
     const { checkUserSession } = this.props;
     checkUserSession();
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

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
