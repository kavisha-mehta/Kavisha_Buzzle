import React from 'react';
import SideBarRow from './SideBarRow';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import './SideBar.css';

function SideBar() {
  return (
    <div className='sidebar'>
    <SideBarRow selected Icon={HomeIcon} title="Home" />
    <SideBarRow Icon={WhatshotIcon} title="Cultures" />
    <SideBarRow Icon={SubscriptionsIcon} title="Rooms" />
    <SideBarRow Icon={SubscriptionsIcon} title="Playlist"/>
    <hr />
    <h4>Recommended Rooms</h4>
    
    <SideBarRow Icon={WhatshotIcon} title="Code with Harry"/>
    <SideBarRow Icon={WhatshotIcon} title="Clever Programmer" />
    <hr />
    <h4> Recommended creators</h4>
    <SideBarRow Icon={SubscriptionsIcon} title="FinLight" />
    <SideBarRow Icon={SubscriptionsIcon} title="Finlight" /> 
    <hr />
    </div>
  )
}

export default SideBar