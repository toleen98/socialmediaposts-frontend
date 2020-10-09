import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

class NavbarLayout extends Component {
    render() {
        return (
            
            <Navbar bg="dark" variant="dark">
            <Link to='/'>
              <Navbar.Brand >
                {' '}
                React Bootstrap
              </Navbar.Brand>
            </Link>
           
          </Navbar>
        )
           
           
    }
}



export default NavbarLayout;