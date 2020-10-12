import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { showSidebarFunc } from "../../actions/sidebarAction";

class NavbarLayout extends Component {
  state = {
    logged:false,
    smScreen:false,
    
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    
  }

  resize() {
    if (window.innerWidth <= 760){
      this.props.showSidebarFunc(false);
    this.setState({ smScreen:true });
    
    
    }
    else {
      
    this.props.showSidebarFunc(true);
    this.setState({ smScreen:false });
    }
    
  }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.resize.bind(this));
  // }

  ShowSidebar = () =>{
    if(!this.props.showSidebar.show){
      this.props.showSidebarFunc(true);
    }
    else {
      this.props.showSidebarFunc(false);
    }
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // push user to home when they login
      this.setState({logged:true})
    }
   
  }

  onLogoutClick = () => {
    this.props.logoutUser();
    this.setState({logged:false})
  };

  
    render() {
        return (
            
          <Navbar collapseOnSelect sticky="top"  bg="dark" variant="dark">
            {this.state.smScreen && 
            <button onClick={this.ShowSidebar}><Icon name='bars'  size='large' style={{cursor: 'pointer'}}  id='myBtn'/></button>
             
            
            }
            <Link to='/'>
              <Navbar.Brand >React-Bootstrap</Navbar.Brand>
            </Link>
          
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              
              {
                this.state.logged ? 
                  <Nav.Link href='/' onClick={this.onLogoutClick}>Logout</Nav.Link> :
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
  showSidebarFunc:PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  showSidebar: PropTypes.object.isRequired
  
};
const mapStateToProps = state => ({
  auth: state.auth,
  showSidebar: state.showSidebar
});
export default connect(
  mapStateToProps,
  { logoutUser, showSidebarFunc }
)(NavbarLayout);