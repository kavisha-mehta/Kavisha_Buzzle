import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'; 

function Header(){
    return(
        <div className="header">

            <div className='Header_left'>
            < MenuIcon />
            </div>

            <div className='header_input'>
            <input placeholder="Search" type="text" />
            <SearchIcon className='header_inputButton'/>
            </div>
             
            <div className='Header_right'> 
            <div className='Header_right_button'> 
            <button> Login </button>
            <button> Sign up</button>
            </div>
            </div> 
        </div>
    )
}


export default Header