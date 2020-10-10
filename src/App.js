import React from 'react';
import NavbarLayout from './layouts/Navbar/Navbar';
import {} from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import LandingPage from './pages/Landingpage/LandingPage';
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
        <Router >
          <div>
            <NavbarLayout/>
            <Switch>
              <Route path="/" exact  component={LandingPage}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
            </Switch> 
          </div>   
        </Router>
    </Provider>
     
   
    
   
  );
}

export default App;
