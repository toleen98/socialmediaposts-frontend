import React from 'react';
import NavbarLayout from './layouts/Navbar/Navbar';
import {} from 'react-router-dom';
import Posts from './pages/PostsPage';
import CreatePost from './pages/CreatePostPage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login'
import LandingPage from './pages/Landingpage/LandingPage'


import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';




function App() {
  return (
    <div>
        <Router >
          <NavbarLayout/>
          
              <Switch>
                <Route path="/" exact  component={LandingPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
              </Switch>
            

    </Router>
    
      </div>
   
    
   
  );
}

export default App;
