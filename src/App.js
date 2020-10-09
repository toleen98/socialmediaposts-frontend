import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from './layouts/Sidebar/Sidebar';
import NavbarLayout from './layouts/Navbar/Navbar';
import {} from 'react-router-dom'
import Posts from './pages/PostsPage'
import CreatePost from './pages/CreatePostPage'
import Register from './pages/auth/Register'

import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';




function App() {
  return (
    <div>
        <Router >
          <NavbarLayout/>
          <Row>
            <Col xs={2} md={3}><Sidebar/></Col>
        
            <Col xs={12} md={6}>
              <Switch>
                <Route path="/" exact  component={Posts}/>
                <Route path="/createpost" component={Register}/>
              </Switch>
            </Col>
            <Col md={3}></Col>
          </Row>

    </Router>
    
      </div>
   
    
   
  );
}

export default App;
