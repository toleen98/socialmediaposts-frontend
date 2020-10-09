import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from './layouts/Sidebar/Sidebar';
import NavbarLayout from './layouts/Navbar/Navbar';
import {} from 'react-router-dom'
import Posts from './pages/PostsPage'
import CreatePost from './pages/CreatePostPage'


import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <NavbarLayout/>
      <Row>
        <Router >
        <Col xs={2} md={4}><Sidebar/></Col>
        
        <Col xs={12} md={8}>
          <Switch>
            <Route path="/" exact  component={Posts}/>
            <Route path="/createpost" component={CreatePost}/>
          </Switch>
        </Col>
        

    </Router>
    </Row>
      </div>
   
    
   
  );
}

export default App;
