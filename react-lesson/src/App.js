import React from 'react';

import TodoApp from "./TodoApp"
import ClickApp from "./ClickApp"
import "./App.css";
import HandleClickApp from './HandleClickApp';

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
        <HandleClickApp />
      </div>
    )
  }
}


export default App