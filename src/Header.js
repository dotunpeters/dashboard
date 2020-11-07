
import logo from './assets/logo.svg';
import search from './assets/search.svg';
import notify from './assets/notify.svg';
import profile from './assets/profile.svg';
import down from './assets/down.svg';
import React, { Component } from 'react';

// import style
import './style/Header.css';

class Header extends Component {
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
                    <img className="down each" src={down} alt="down" />
                </span>
            </div>
        )
    }
}

export default Header;