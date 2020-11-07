import React, { Component } from 'react'

// import style
import '../style/Carts.css'

class Gains extends Component {
    render() {
        return (
            <div className="carts">
                <div>
                    <p className="carts_value">{this.props.value}</p>
                    <p className="carts_gain_name">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default Gains