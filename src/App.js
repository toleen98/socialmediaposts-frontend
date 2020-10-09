import React from 'react';
import Sidebar from './layouts/Sidebar/Sidebar';
import NavbarLayout from './layouts/Navbar/Navbar';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    
    <>
      <NavbarLayout/>
      <Sidebar/>
    </>
   
  );
}

export default App;
