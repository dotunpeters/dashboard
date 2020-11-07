import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'

// import style
import './style/Pages.css';

class Marketplaces extends Component {
    render() {
        return (
            <div className="section">

                {/* header bar */}
                <Header/>
                
                <div className="main">
                    <div className="nav">
                        {/* nav bar */}
                        <Nav/>
                    </div>

                    <div className="content">
                        {/* content */}
                        <p> Marketplaces </p>
                    </div>

                </div>

            </div>
        )
    }
}

export default Marketplaces