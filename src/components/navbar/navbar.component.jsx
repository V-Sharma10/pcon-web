import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../../assets/bars-solid.svg';
import { ReactComponent as BellIcon } from '../../assets/bell-solid.svg';

import './navbar.styles.css';

class Navbar extends React.Component{

    render() {
        //console.log('Navbar:', this.props)
        return (
            <div className='navbar'>
                <div className='toggle-icon-div' onClick={this.props.toggleSidebar}>
                    <MenuIcon className='menu-icon'/>
                </div>
                <Link to='/' style={{textDecoration:'none',color:'white'}} onClick={this.props.closeSidebar} className='pcon-home-btn'>
                    <span>PCON </span>
                </Link>
                <div className='notification-btn'>
                    <div className='notification-icon'>
                        <BellIcon className='bell-icon'/>
                    </div>
                    <div className='text'>
                        <span>NOTIFICATIONS</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Navbar;