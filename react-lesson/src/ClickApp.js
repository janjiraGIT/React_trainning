import React from 'react'

class ClickApp extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        // Need to declare this line for handleClick method
        this.handleClick = this.handleClick.bind(this)
    }

    // This method add in App class need to add
    // this.handleClick = this.handleClick.bind(this)
    // in constructor
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click!</button>
            </div>
        )
    }
}


export default ClickApp