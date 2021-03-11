import React from 'react';

import todosData from "./componentsTodo/todoData"
import TodoItem from './componentsTodo/TodoItem';
import TodoApp from "./componentsTodo/TodoApp"
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
      </div>
    )
  }
}

export default App