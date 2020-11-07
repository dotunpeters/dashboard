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
            gains: "10,271",
            gross_data: [1, 2, 3, 4, 5 ],
            order_data: [1, 2, 3, 4, 5 ],
            data_percent_1: "32.6%",
            data_percent_2: "12.5%",
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

                        {/* carts */}
                        <div className="content_carts">
                            <div className="each">
                                <Carts
                                    name="Webshops"
                                    value={this.state.webshops}
                                />
                            </div>

                            <div className="each">
                                <Carts 
                                    name="Orders"
                                    value={this.state.orders}
                                />
                            </div>

                            <div className="each">
                                <Carts 
                                    name="Marketplaces"
                                    value={this.state.marketplaces}
                                />
                            </div>

                            <div className="each">
                                <Carts 
                                    name="Products"
                                    value={this.state.products}
                                />
                            </div>
                        </div>

                        {/* Gain */}
                        <p className="content_gain"> Gains </p>
                        <div className="content_carts">
                            <div className="each">
                                <Gains
                                    name="MONTLY NET PROFIT"
                                    value={this.state.gains}
                                />
                            </div>

                            <div className="each">
                                <Gains
                                    name="MONTHLY AVERAGE DAILY GROSS REVENUE"
                                    value={this.state.gains}
                                />
                            </div>

                            <div className="each">
                                <Gains
                                    name="TOTAL SALES"
                                    value={this.state.gains}
                                />
                            </div>

                            <div className="each">
                                <Gains
                                    name="TOTAL CUSTOMERS THIS MONTH"
                                    value={this.state.gains}
                                />
                            </div>
                        </div>

                        {/* Charts */}
                        <div className="content_carts">
                            <div className="each">
                                <Charts
                                    number={1}
                                    name="Monthly Gross Revenue"
                                    value={this.state.gross_data}
                                />
                            </div>

                            <div className="each">
                                <Charts
                                number={2}
                                    name="Order Value"
                                    value={this.state.order_data}
                                />
                            </div>
                        </div>

                        {/* Profits */}
                        <div className="content_carts">
                            <div className="each">
                                <Profits
                                    number={1}
                                    name="Monthly Gross Rate %"
                                    value={this.state.gross_data}
                                />
                            </div>

                            <div className="each">
                                <Profits
                                    number={2}
                                    name="GROSS PROFIT MARGIN"
                                    value={this.state.data_percent_1}
                                />
                                <Profits
                                    number={2}
                                    name="NET PROFIT MARGIN"
                                    value={this.state.data_percent_2}
                                />
                            </div>

                            <div className="each">
                                <Profits
                                    number={3}
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Dashboard