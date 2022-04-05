import React from 'react';
import './SideBarRow.css';


function SideBarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && `selected`}`} >
        <Icon className="sidebarRow_icon" />
        <h3 className='sidebarRow_title'>{title}</h3>
    </div>
  )
}

export default SideBarRow