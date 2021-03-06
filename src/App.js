import React, {Component} from 'react';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

import NavbarLayout from './layouts/Navbar/Navbar';
import {} from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import LandingPage from './pages/Landingpage/LandingPage';
import { Provider } from "react-redux";
import store from "./store";
  
  class App extends Component  {

    render() {
      return (
        <div className='App'>
          <Provider store={store}>
            <Router >
              
                <NavbarLayout/>
                <Switch>
                  <Route path="/" exact  component={LandingPage}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/login" component={Login}/>
                </Switch> 
               
            </Router>
        </Provider>
        </div>
        
         
       
       
      );
    }
  
}


export default App;