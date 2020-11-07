
import React, { Component } from 'react'
import grid from './grid.svg'

// import style
import '../style/Profits.css'

class Profits extends Component {
    render() {
        if (this.props.number === 1) {
            return (
                <div className="carts_big_whs">
                    <div>
                        <p className="carts_name">{this.props.name}</p>
                        <p className="carts_value">{this.props.value}</p>
                    </div>
                </div>
            )
        }

        else if (this.props.number === 2) {
            return (
                <div className="carts">
                    <div>
                        <p className="carts_name">{this.props.name}</p>
                        <p className="carts_value_new">{this.props.value}</p>
                    </div>
                </div>
            )
        }

        else if (this.props.number === 3) {
            return (
                <div>
                    <div>
                        <img className="img_grid" src={grid} alt="Grid" />
                    </div>
                </div>
            )
        }

    }
}

export default Profits