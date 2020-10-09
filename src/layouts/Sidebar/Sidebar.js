import React,{Component} from 'react';
import SideBarItem from './SidebarItem/SidebarItem';
import {Menu} from 'semantic-ui-react';
import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      
        <Menu borderless vertical stackable fixed='left' className='side-nav' >
          <SideBarItem highlight={true} path='/'  label='Home' icon='home'/>
          <SideBarItem path='/createpost' label='Creat Post' icon='write'/>
          <SideBarItem label='Report history' icon='flag'/>
          <SideBarItem label='Help' icon='help circle'/>
          <SideBarItem label='Send feedback' icon='comment'/>
        </Menu>
      
      
    );
  }
}

export default Sidebar;