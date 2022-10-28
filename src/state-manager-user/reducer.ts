import { ITodo } from "../models/models"
import { IAction } from "../state-manager-library/models/custommodels"

export const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [...state.todos, { id: state.todos.length, title: action.payload, done: false }]
      }
    case "REMOVE_TASK":
      return {
        ...state,
        todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload)
      }
    default:
      return state
  }
}