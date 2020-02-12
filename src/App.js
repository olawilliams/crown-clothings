import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage-component';
import ShopPage from './pages/shop/shop-component';
import  SignInSignUp  from "./pages/signin-signup/signin-signup-component";
import Header from './components/header/header-component';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import './App.css';

class App extends React.Component  {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFronAuth = null

  componentDidMount() {
    
    this.unsubscribeFronAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({currentUser: userAuth})
    });  
  }

    componentWillUnmount() {
      this.unsubscribeFronAuth();
    }
    
   render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact  path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUp} />
        </Switch> 
      </div>
    );
  }
 
}

export default App;
