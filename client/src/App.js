import React, { useEffect, Suspense } from 'react';

import { Switch, Route, Redirect } from "react-router-dom";
import Header from './components/header/header-component';
import Footer from './components/footer/footer-component';
import SpringSales from './components/spring-sales/spring-sales-component';
import Spinners from './components/spinner/spinner';
import ErrorBoundary from './components/errorBoundary/errorboundary-component';
import CartAlert from './components/cart-alert/cart-alert-component'

import { connect } from 'react-redux';

import { checkUserSession } from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user-selector';
import { selectPaid } from './redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';


import './App.css';

const HomePage = React.lazy(() => import('./pages/Homepage/Homepage-component'));
const ShopPage = React.lazy(() => import('./pages/shop/shop-component'));
const SignInSignUp = React.lazy(() => import('./pages/signin-signup/signin-signup-component'));
const CheckoutPage = React.lazy(() => import('./pages/checkoutpage/checkout-component'));
const OrderSearch = React.lazy(() => import('./pages/order-search/order-search-component'));
const Account = React.lazy(() => import('./pages/account/account-component'));
const OrderDetails = React.lazy(() => import('./pages/order-details/order-details-component'));
const OrderConfirmation = React.lazy(() => import('./pages/order-confirmation/order-confirmation-component'));




const App = ({checkUserSession, currentUser, paid }) =>  {

  useEffect( () => {
    checkUserSession()
  }, [checkUserSession])
 

    return (
      <div className='App'>
        {/* <CartAlert /> */}
        <Header  />
        <SpringSales />
        <ErrorBoundary>
          <Suspense fallback={<div className='spinner'><Spinners /></div>}>
            <Switch>
              <Route exact  path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' 
                render={() => 
                  paid
                  ? <Redirect to='/confirmation' />
                  : <CheckoutPage />
                }
              />
              <Route exact path='/ordersearch' render={() => 
               !currentUser 
                  ? <Redirect to='/signin' />
                  : <OrderSearch />}
              />
              <Route exact path='/orderdetails/:orderId' component={OrderDetails}/>
              <Route exact path='/account' component={Account}/>
              <Route exact path='/signin' render={() => 
                currentUser  
                ? <Redirect to='/'  /> 
                : <SignInSignUp />} />
                <Route exact path='/confirmation'  component={OrderConfirmation}/>
            </Switch> 
          </Suspense>
         </ErrorBoundary>
        <Footer />
      </div>
    ); 
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  paid: selectPaid

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
