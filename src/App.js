import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage-component';
import ShopPage from './pages/shop/shop-component';
import  SignInSignUp  from "./pages/signin-signup/signin-signup-component";
import Header from './components/header/header-component';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';

class App extends React.Component  {
  
  unsubscribeFromAuth = null

  componentDidMount() {
    
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({        
                id: snapShot.id,
                ...snapShot.data()
               });          
         
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });  
  }

    componentWillUnmount() {
      this.unsubscribeFronAuth();
    }
    
   render() {
    return (
      <div className='App'>
        <Header  />
        <Switch>
          <Route exact  path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser  
            ? <Redirect to='/'  /> 
            : <SignInSignUp />} />
        </Switch> 
      </div>
    );
  }
 
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: userName => dispatch(setCurrentUser(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
