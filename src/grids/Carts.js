
import React, { Component } from 'react'
import webshop from '../assets/webshop.svg'
import orders from '../assets/orders.svg'
import marketplaces from '../assets/marketplaces.svg'
import products from '../assets/products.svg'

// import style
import '../style/Carts.css'

class Carts extends Component {
    render() {
        if (this.props.name === "webshop") {
            return (
                <div className="cart">
                    <div>
                        <p> <img className="cart_img" src={webshop} alt="Webshop" /> </p>
                        <div>
                            <p>{this.props.value}</p>
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                </div>
            )
        }

        if (this.props.name === "orders") {
            return (
                <div className="cart">
                    <div>
                        <p> <img className="cart_img" src={orders} alt="Orders" /> </p>
                        <div>
                            <p>{this.props.value}</p>
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                </div>
            )
        }

        if (this.props.name === "marketplaces") {
            return (
                <div className="cart">
                    <div>
                        <p> <img className="cart_img" src={webshop} alt="Webshop" /> </p>
                        <div>
                            <p>{this.props.value}</p>
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                </div>
            )
        }

        if (this.props.name === "products") {
            return (
                <div className="cart">
                    <div>
                        <p> <img className="cart_img" src={webshop} alt="Webshop" /> </p>
                        <div>
                            <p>{this.props.value}</p>
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default Carts
