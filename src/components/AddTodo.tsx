import React, { useState } from "react"
import { AddTodoDTO } from "../dtos/AddTodoDTO"
import { FaPlus } from "react-icons/fa"

interface Props {
  onTodoAdded: (newTodo: AddTodoDTO) => void
}

const AddTodo = ({ onTodoAdded }: Props) => {
  const [task, setTask] = useState("")

  return (
    <div className="w-1/2 mx-auto my-4 p-4 rounded border-2 border-indigo-700">
      <h2 className="mb-4 font-semibold text-indigo-500">Add a todo</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="add-todo"
          id=""
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Write here what you will do"
          className="flex-grow rounded px-4 bg-indigo-300 focus:bg-indigo-700 text-white placeholder-white"
        />
        <button
          onClick={() => {
            if (task === "") return

            onTodoAdded({
              task,
            })

            setTask("")
          }}
          className="flex items-center gap-2 py-2 px-4 rounded bg-green-500 hover:bg-green-700 text-white"
        >
          <FaPlus />
          Add
        </button>
      </div>
    </div>
  )
}

export { AddTodo }
