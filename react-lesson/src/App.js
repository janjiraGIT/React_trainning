import React from 'react';

import TodoApp from "./componentsTodo/TodoApp"
import ClickApp from "./ClickApp"
import "./App.css";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      text: "Hello Janjira"
    }
  }

  render() {
    return (
      <div className="app">
        <h1>{this.state.text}</h1>
        <ClickApp />
        <br/>
        <TodoApp />
      </div>
    )
  }
}


export default App