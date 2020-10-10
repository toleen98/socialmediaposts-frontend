import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class NavbarLayout extends Component {
    render() {
        return (
            
          <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
            <Link to='/'>
              <Navbar.Brand >React-Bootstrap</Navbar.Brand>
            </Link>
          
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Link to='register'>
                  <Nav.Link href='register'> Register </Nav.Link>
                </Link>
                <Link to='/login'>
                  <Nav.Link href='/login' >Login</Nav.Link>
                </Link>
                
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
           
           
    }
}



export default NavbarLayout;