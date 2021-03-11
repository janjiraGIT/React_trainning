import React from 'react';

import TodoApp from "./componentsTodo/TodoApp"
import HandleClickApp from "./HandleClickApp"
import "./App.css";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      hello: "Hello!"
    }
  }
  render() {
    return (
      <div className="app">
        <h1>{this.state.hello}</h1>
        <TodoApp />
        <HandleClickApp/>
      </div>
    )
  }
}

export default App