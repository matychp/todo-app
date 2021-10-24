import React from "react"
import { ITodo } from "../models/ITodo"
import { ToDoItem } from "./ToDoItem"
import { BsCardChecklist } from "react-icons/bs"

interface Props {
  todos: ITodo[]
  onTodoClicked: Function
  onTodoDeleted: (id: number) => void
}

const ToDoList = ({ todos, onTodoClicked, onTodoDeleted }: Props) => {
  return (
    <>
      <div className="w-4/5 mx-auto m-2">
        <h1 className="flex items-center gap-2 p-4 rounded text-2xl bg-indigo-500 text-white">
          <BsCardChecklist />
          Todo's
        </h1>
        {todos.length === 0 ? (
          <h2 className="my-2 mx-4 p-2 rounded bg-indigo-300 text-white">
            List is empty, start by adding a todo.
          </h2>
        ) : (
          <div>
            {todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                onClick={() => onTodoClicked(todo.id)}
                onDelete={onTodoDeleted}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export { ToDoList }
