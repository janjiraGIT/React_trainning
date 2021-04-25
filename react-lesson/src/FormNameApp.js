import React, { Component } from "react"

// https://reactjs.org/docs/forms.html

class FormNameApp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="last Name"
                    onChange={this.handleChange}
                />
                <h1>
                    {this.state.firstName} {this.state.lastName}
                </h1>
            </form>
        )
    }
}

export default FormNameApp