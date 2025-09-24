import React from "react";

class Range extends React.Component {
    state = {
        val: 240,
    }

    range = (event) => {
        this.setState({ val: event.target.value });
    }

    render () {
        return (
            <>
            <div className="container">
                <div className="square-container">
                    <div className="square" style={{
                        width: `${this.state.val}px`,
                        height: `${this.state.val}px`
                    }}
                    ></div>
                </div>
                <p>Квадрат {this.state.val} x {this.state.val} пикселей</p>
                <input
                    type="range"
                    className="range-input"
                    onChange={this.range}
                    value={this.state.val}
                    min="50" max="240" step="10"
                />
            </div>
            </>
        )
    }
}
export default Range