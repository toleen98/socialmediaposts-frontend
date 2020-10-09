import React,{Component} from 'react';
// import {SideBarItem} from './SideBarItem/SideBarItem';
import {Menu} from 'semantic-ui-react';
import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        {/*...*/}
      </Menu>
    );
  }
}

export default Sidebar;