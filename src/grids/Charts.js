
import React, { Component } from 'react'

// import style
import '../style/Charts.css'

class Charts extends Component {
    render() {
        if (this.props.number === 1) {
            return (
                <div className="carts_big_wh">
                    <div>
                        <p className="carts_name">{this.props.name}</p>
                        <p className="carts_value">{this.props.value}</p>
                    </div>
                </div>
            )
        }

        else if (this.props.number === 2) {
            return (
                <div className="carts_big_h">
                    <div>
                        <p className="carts_name">{this.props.name}</p>
                        <p className="carts_value">{this.props.value}</p>
                    </div>
                </div>
            )
        }

    }
}

export default Charts
