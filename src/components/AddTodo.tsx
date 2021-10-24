import React, { useState } from "react"
import { AddTodoDTO } from "../dtos/AddTodoDTO"
import { FaPlus } from "react-icons/fa"
import { useBreakpoints } from "../hooks/useResponsive"
import { Button } from "./Kit"

interface Props {
  onTodoAdded: (newTodo: AddTodoDTO) => void
}

const AddTodo = ({ onTodoAdded }: Props) => {
  const [task, setTask] = useState("")
  const { sm } = useBreakpoints()

  return (
    <div className="w-11/12 md:w-1/2 mx-auto my-4 rounded border-2 border-indigo-700">
      <h2 className="mb-4 p-2 font-semibold bg-indigo-500 text-white">
        Add a todo
      </h2>
      <div className="flex gap-4 mx-2 mb-2">
        <input
          type="text"
          name="add-todo"
          id=""
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Write here what you will do"
          className="flex-grow rounded py-2 px-4 bg-indigo-300 focus:bg-indigo-700 text-white placeholder-white"
        />
        <Button
          onClick={() => {
            if (task === "") return

            onTodoAdded({
              task,
            })

            setTask("")
          }}
          className="bg-green-500 hover:bg-green-700 text-white"
        >
          <FaPlus />
          {sm ? "Add" : ""}
        </Button>
      </div>
    </div>
  )
}

export { AddTodo }
