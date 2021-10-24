import React, { MouseEventHandler } from "react"
import { ITodo } from "../models/ITodo"
import { FaTrash } from "react-icons/fa"
import { useBreakpoints } from "../hooks/useResponsive"
import { Button } from "./Kit"

interface Props {
  todo: ITodo
  onClick: MouseEventHandler<HTMLInputElement>
  onDelete: (id: number) => void
}

const ToDoItem = ({ todo: { id, task, status }, onClick, onDelete }: Props) => {
  const { sm } = useBreakpoints()

  return (
    <div
      className={`flex items-center px-4 py-2 rounded border-2 border-indigo-500 ${
        status === "done" ? "bg-green-300" : "white"
      }`}
    >
      <input
        type="checkbox"
        name="task"
        checked={status === "not_started" ? false : true}
        onClick={onClick}
      />
      <label
        className={`flex-grow ml-4 p-2 ${
          status === "done" ? "line-through" : ""
        }`}
        htmlFor="task"
      >
        {task}
      </label>
      <Button
        className="bg-red-300 hover:bg-red-500 text-white"
        onClick={() => onDelete(id)}
      >
        <FaTrash />
        {sm ? "Delete" : ""}
      </Button>
    </div>
  )
}

export { ToDoItem }
