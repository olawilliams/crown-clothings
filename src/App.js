import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage-component';

import './App.css';

const HatsPage = (props) => {
  console.log(props)
 return (<div>
    <h1>HATSPAGE</h1>
  </div>)
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact  path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch> 
    </div>
  );
}

export default App;
