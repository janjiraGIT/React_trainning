
import React, { Component } from 'react'

class FetchStarWar extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://swapi.dev/api/people/4")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }


    render() {
        const text = this.state.loading ? "loading.." : this.state.character.name
        const textStyle = {
            fontSyle: "italic",
            fontWeight: "bold",
            color: "red",
        }
        return (
            <div>
                <p style={textStyle}>{text}</p>
            </div>
        )
    }
}

export default FetchStarWar