import React from 'react';

import TodoApp from "./componentsTodo/TodoApp"
import HandleClickApp from "./HandleClickApp"
import "./App.css";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
    // 
    this.handleClick = this.handleClick.bind(this)
  }
  // This method add in App class need to add
  // this.handleClick = this.handleClick.bind(this)
  // in constructor
  handleClick() {
  // use setState from React.Component
  // prevState is the prevous state value
  this.setState(prevState => {
    return {
      count: prevState.count +1
    }
  }
  )
}

render() {
  return (
    <div className="app">
      <h1>{this.state.count}</h1>
      <button onClick={this.handleClick}> Click!</button>
      <HandleClickApp  />
      <TodoApp />
    </div>
  )
}
}

export default App