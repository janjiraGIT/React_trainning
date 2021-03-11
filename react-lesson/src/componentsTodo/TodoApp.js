import React from 'react';

import todosData from "./todoData"
import TodoItem from './TodoItem';

class TodoApp extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }


  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}

export default TodoApp