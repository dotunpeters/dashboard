import React, { Component } from 'react'
import dashboard from './assets/dashboard.svg'
import upload from './assets/upload.svg'
import marketplaces from './assets/marketplaces.svg'
import products from './assets/products.svg'
import orders from './assets/orders.svg'
import settings from './assets/settings.svg'
import { Link } from 'react-router-dom'

// import style
import './style/Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link to="/connect">
                    <p className="connect"> Connect Shop  &nbsp;&nbsp; +</p>
                </Link>

                <Link to="/">
                    <p> <img className="nav_dashboard each" src={dashboard} alt="Dashboard" /> Dashboard </p>
                </Link>

                <Link to="/upload">
                    <p> <img className="upload each" src={upload} alt="Upload Feed" /> Upload Feed </p>
                </Link>

                <Link to="/marketplaces">
                    <p> <img className="marketplaces each" src={marketplaces} alt="Add Marketplaces" /> Add Marketplaces </p>
                </Link>

                <Link to="/products">
                    <p> <img className="products each" src={products} alt="Products" />Products </p>
                </Link>

                <Link to="/orders">
                    <p> <img className="orders each" src={orders} alt="Orders" /> Orders </p>
                </Link>

                <Link to="/settings">
                    <p> <img className="settings each" src={settings} alt="Settings" /> Settings </p>
                </Link>
            </div>
        )
    }
}

export default Nav
