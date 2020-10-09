import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavbarLayout extends Component {
    render() {
        return (
            
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              {' '}
              React Bootstrap
            </Navbar.Brand>
          </Navbar>
        )
           
           
    }
}



export default NavbarLayout;