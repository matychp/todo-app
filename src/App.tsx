import React, { useState } from "react"
import { AddTodo } from "./components/AddTodo"
import { ToDoList } from "./components/ToDoList"
import { AddTodoDTO } from "./dtos/AddTodoDTO"
import { ITodo } from "./models/ITodo"

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const onTodoClicked = (index: number) => {
    const newTodos = [...todos]
    const clickedTodo = newTodos[index]

    newTodos[index] = {
      ...clickedTodo,
      status: clickedTodo.status === "not_started" ? "done" : "not_started",
    }

    setTodos(newTodos)
  }

  const onTodoAdded = (newTodoInput: AddTodoDTO) => {
    const newTodo: ITodo = {
      id: todos.length,
      task: newTodoInput.task,
      status: "not_started",
    }

    setTodos([...todos, newTodo])
  }

  const onTodoDeleted = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)

    setTodos(newTodos)
  }

  return (
    <div>
      <AddTodo onTodoAdded={onTodoAdded} />
      <ToDoList
        todos={todos}
        onTodoClicked={onTodoClicked}
        onTodoDeleted={onTodoDeleted}
      />
    </div>
  )
}

export default App
