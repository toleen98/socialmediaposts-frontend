import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from './layouts/Sidebar/Sidebar';
import NavbarLayout from './layouts/Navbar/Navbar';
import {} from 'react-router-dom';
import Posts from './pages/PostsPage';
import CreatePost from './pages/CreatePostPage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login'


import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';




function App() {
  return (
    <div>
        <Router >
          <NavbarLayout/>
          
              <Switch>
                <Route path="/" exact  component={Posts}/>
                <Route path="/createpost" component={CreatePost}/>
              </Switch>
            

    </Router>
    
      </div>
   
    
   
  );
}

export default App;
