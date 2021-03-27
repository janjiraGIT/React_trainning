import React from 'react';

import todosData from "./todoData"
import TodoItem from "./TodoItem"

function TodoApp() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)

  return (
    <div>
      {todoItems}
    </div>
  )
}

export default TodoApp