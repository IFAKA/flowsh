import { ITodo, TodoProps } from "../models/models"
import useActions from "../state-manager-user/hooks/useActions"

const Todo = ({ todo }: TodoProps) => {
    const { id, title } = todo
    const { removeBy } = useActions()
    const delTodo = () => removeBy(id)
    return (
        <div key={id} className="todo">
            <div>{title}</div>
            <button onClick={delTodo}>&#10005;</button>
        </div>
    )
}

export default Todo