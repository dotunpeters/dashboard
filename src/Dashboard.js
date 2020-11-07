import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'
import Carts from './grids/Carts.js'
import Charts from './grids/Charts.js'
import Gains from './grids/Gains.js'
import Profits from './grids/Profits.js'

// import style
import './style/Pages.css';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            webshops: "1,050",
            orders: "10,271",
            marketplaces: "1,050",
            products: "1,050",
        }
    }

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
                        <div className="content_carts">
                            <Carts 
                                name="Webshops"
                                value={this.state.webshops}
                            />
                            <Carts 
                                name="Orders"
                                value={this.state.orders}
                            />
                            <Carts 
                                name="Parketplaces"
                                value={this.state.marketplaces}
                            />
                            <Carts 
                                name="Products"
                                value={this.state.products}
                            />
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Dashboard