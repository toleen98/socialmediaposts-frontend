import React from 'react';
import Sidebar from './layouts/Sidebar/Sidebar';
import NavbarLayout from './layouts/Navbar/Navbar';
import {} from 'react-router-dom'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    
    <Router>
    
      <NavbarLayout/>
      <Sidebar/>
      <Switch>
        
      </Switch>
      
    </Router>
   
  );
}

export default App;
