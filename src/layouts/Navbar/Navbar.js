import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class NavbarLayout extends Component {
  state = {
    logged:false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // push user to home when they login
      this.setState({logged:true})
    }
   
  }

  onLogoutClick = () => {
    console.log('hi')
    
    this.props.logoutUser();
    this.setState({logged:false})
  };

  
    render() {
        return (
            
          <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
            <Link to='/'>
              <Navbar.Brand >React-Bootstrap</Navbar.Brand>
            </Link>
          
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              
              {
                this.state.logged ? 
                  <Nav.Link href='/' onClick={this.onLogoutClick}>logout</Nav.Link> :
                  <Nav>
                    <Link to='register' >
                      <Nav.Link href='register' > Register </Nav.Link>
                    </Link>
                    <Link to='/login'>
                     <Nav.Link href='/login' >Login</Nav.Link>
                    </Link>
                  </Nav>      
              }
                
          </Navbar.Collapse>
        </Navbar>
        )
           
           
    }
}



NavbarLayout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(NavbarLayout);