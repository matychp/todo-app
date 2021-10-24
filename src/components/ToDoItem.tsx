import React, { MouseEventHandler } from "react"
import { ITodo } from "../models/ITodo"
import { FaTrash } from "react-icons/fa"

interface Props {
  todo: ITodo
  onClick: MouseEventHandler<HTMLInputElement>
  onDelete: (id: number) => void
}

const ToDoItem = ({ todo: { id, task, status }, onClick, onDelete }: Props) => {
  return (
    <div
      className={`flex items-center mx-4 my-1 px-4 py-2 rounded ${
        status === "done" ? "bg-green-300" : "bg-gray-200"
      }`}
    >
      <input
        type="checkbox"
        name="task"
        checked={status === "not_started" ? false : true}
        onClick={onClick}
      />
      <label
        className={`flex-grow ml-4 ${status === "done" ? "line-through" : ""}`}
        htmlFor="task"
      >
        {task}
      </label>
      <button
        className="flex items-center gap-2 p-2 rounded bg-red-300 hover:bg-red-500 text-white"
        onClick={() => onDelete(id)}
      >
        <FaTrash />
        Delete
      </button>
    </div>
  )
}

export { ToDoItem }
