
import React, { Component } from 'react'
import webshop from '../assets/webshop.svg'
import orders from '../assets/orders.svg'
import marketplaces from '../assets/marketplaces.svg'
import products from '../assets/products.svg'

// import style
import '../style/Carts.css'

class Carts extends Component {
    render() {
        if (this.props.name === "Webshops") {
            return (
                <div className="carts">
                    <div>
                        <p className="carts_icon"> <img src={webshop} alt="Webshop" /> </p>
                    </div>
                    <div>
                        <p className="carts_value">{this.props.value}</p>
                        <p className="carts_name">{this.props.name}</p>
                    </div>
                </div>
            )
        }

        else if (this.props.name === "Orders") {
            return (
                <div className="carts">
                    <div>
                        <p className="carts_icon"> <img src={orders} alt="Orders" /> </p>
                    </div>
                    <div>
                        <p className="carts_value">{this.props.value}</p>
                        <p className="carts_name">{this.props.name}</p>
                    </div>
                </div>
            )
        }

        else if (this.props.name === "Marketplaces") {
            return (
                <div className="carts">
                    <div>
                        <p className="carts_icon"> <img src={marketplaces} alt="Webshop" /> </p>
                    </div>
                    <div>
                        <p className="carts_value">{this.props.value}</p>
                        <p className="carts_name">{this.props.name}</p>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className="carts">
                    <div>
                        <p className="carts_icon"> <img src={products} alt="Webshop" /> </p>
                    </div>
                    <div>
                        <p className="carts_value">{this.props.value}</p>
                        <p className="carts_name">{this.props.name}</p>
                    </div>
                </div>
            )
        }

    }
}

export default Carts
