import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import {} from 'react-router-dom';
import Posts from '../PostsPage';
import CreatePost from '../CreatePostPage';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RightsideCards from '../../layouts/rightSide/RightsideCards'


class LandingPage extends Component {
  state = {
    showSidebar: true
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("click", this.resize.bind(this));
    this.resize();
  }

  resize() {
    console.log(this.props.showSidebar.show)
    this.setState({showSidebar:this.props.showSidebar.show})
  }
    
    



  render (){
  return (
    <div style={{marginTop:'20px'}}>
      <Container>
      <Router >
        
        <Row>
          <Col  >
          {this.state.showSidebar   &&  <Sidebar />}
         
          </Col>
          <Col xs={12} md={6} >
            <Switch>
              <Route path="/" exact  component={Posts}/>
              <Route path="/createpost" component={CreatePost}/>
            </Switch>
          </Col>
          {this.state.showSidebar  && <Col ><RightsideCards/></Col>}
        </Row>

  </Router>
      </Container>
        
    
      </div>
   
    
   
  );}
}

LandingPage.propTypes = {
  showSidebarFunc:PropTypes.func.isRequired,
  
  showSidebar: PropTypes.object.isRequired
  
};
const mapStateToProps = state => ({
  auth: state.auth,
  showSidebar: state.showSidebar
});
export default connect(
  mapStateToProps,
 
)(LandingPage);