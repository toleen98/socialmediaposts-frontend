import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import {Link} from 'react-router-dom'
import './SideBarItem.scss';

export default function SideBarItem(props) {
  const highlight = props.highlight ? 'highlight-item' : null;
  return (
      <Menu.Item className={['sidebar-item', highlight].join(' ')}>
        <Link to={props.path || '#'}>
          <div className='sidebar-item-alignment-container'>
            <span><Icon size='large' name={props.icon}/> </span>
            <span>{props.label}</span>
        </div>
        </Link>
      </Menu.Item>
  );
}