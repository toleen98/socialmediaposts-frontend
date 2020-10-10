import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import {} from 'react-router-dom';
import Posts from '../PostsPage';
import CreatePost from '../CreatePostPage';


function LandingPage() {
  return (
    <div>
        <Router >
          <Row>
            <Col xs={2} md={3}><Sidebar/></Col>
            <Col xs={12} md={6}>
              <Switch>
                <Route path="/" exact  component={Posts}/>
                <Route path="/createpost" component={CreatePost}/>
              </Switch>
            </Col>
            <Col md={3}></Col>
          </Row>

    </Router>
    
      </div>
   
    
   
  );
}

export default LandingPage;
