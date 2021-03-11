import React from "react"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }


  render() {

    let displayText
    if (this.state.isLoggedIn) {
      displayText = "yes"
    } else {
      displayText = "no"
    }


    return (
      <div>
        <h1>You are currently logged : {displayText}</h1>
      </div>
    )
  }

}

export default App
