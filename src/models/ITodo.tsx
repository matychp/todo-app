export interface ITodo {
  id: number
  task: string
  status: TodoStatus
}

type TodoStatus = "not_started" | "done"
