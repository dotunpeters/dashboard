
import logo from './assets/logo.svg';
import search from './assets/search.svg';
import notify from './assets/notify.svg';
import profile from './assets/profile.svg';
import down from './assets/down.svg';
import profile_dop from './assets/profile_dop.svg';
import settings_dop from './assets/settings_dop.svg';
import logout_dop from './assets/logout_dop.svg';
import React, { Component } from 'react';

// import style
import './style/Header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false,
        }
        
    }

    render() {
        return (
            <div className="header">
                <img className="header_logo" src={logo} alt="logo" />
                <span className="header_search">
                    <img src={search} alt="search" />
                    <input type="search" placeholder="Search..." />
                </span>
                <span className="header_details">
                    <img className="notify each" src={notify} alt="notify" />
                    <img className="profile each" src={profile} alt="profile" />
                    <p className="name each"> John Doe </p>
                    <img onClick={this.handleClick} className="down each" src={down} alt="down" />
                    <div className={this.state.click === true ? "show" : "hide"}>
                        <p> <img className="profile each" src={profile_dop} alt="Profile" /> Profile </p>
                        <p> <img className="profile each" src={settings_dop} alt="Settings" /> Settings </p>
                        <p> <img className="profile each" src={logout_dop} alt="Logout" /> Logout </p>
                        <p id="version"> Version 1.2.0 </p> 
                    </div>
                </span>
            </div>
        )
    }

    handleClick = () => {
        this.setState(state => ({
            click: !state.click,
          }));
    }
}

export default Header;