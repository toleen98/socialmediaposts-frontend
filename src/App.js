import React from 'react';
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
      <div style={{display:'flex'}}>
        <Router >
        
        <Sidebar/>

        <Switch>
          <Route path="/" exact  component={Posts}/>
          <Route path="/createpost" component={CreatePost}/>
        </Switch>

    </Router>
    </div>
      </div>
   
    
   
  );
}

export default App;
