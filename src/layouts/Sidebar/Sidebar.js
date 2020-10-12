import React,{Component} from 'react';
import SideBarItem from './SidebarItem/SidebarItem';
import {Menu, Image} from 'semantic-ui-react';
import './Sidebar.scss';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import userimg from '../../assets/imges/userimg.png'
import './SidebarItem/SideBarItem.scss'


class Sidebar extends Component {
  state = {
    logged : false,
    userName :'',
    
  }
  

  componentWillMount() {
    
    if (this.props.auth.isAuthenticated) {
      // push user to home when they login
      this.setState({logged:true, userName: this.props.auth.user.name })
    }
   
  }

  render() {
    return (
      
        <Menu borderless vertical stackable fixed='left' className='side-nav' >
          {this.state.logged && <Menu.Item className='sidebar-item'>
            <div className='sidebar-item-alignment-container'>
              <Image
               floated='left'
               size='mini'
               src={userimg}
               />
               <span>{this.state.userName.toUpperCase()}</span>
              </div> 
            
          </Menu.Item>}
          <br/>
          <SideBarItem highlight={true} path='/'  label='Home' icon='home'/>
          {this.state.logged && <SideBarItem path='/createpost' label='Creat Post' icon='write'/>}
          <SideBarItem label='Report history' icon='flag'/>
          <SideBarItem label='Help' icon='help circle'/>
          <SideBarItem label='Send feedback' icon='comment'/>
        </Menu>
      
      
    );
  }
}

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Sidebar);