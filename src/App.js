import './App.css';
import React from 'react';
import Login from './Login/Login';
import LandingImage from './Components/LandingPage/LandingImage'; 
import {
  Route,
  BrowserRouter,
  Link,
  Switch
} from 'react-router-dom'

import AdminDashboard from "./Dashboards/AdminDashboard"

function App() {
  return (

  <React.Fragment> 
        <Switch>
          <Route path="/" exact component={LandingImage} />
          <Route path="/AdminDashBoard" component={AdminDashboard}/>   
        </Switch>
  </React.Fragment>

  );
}

export default App;
