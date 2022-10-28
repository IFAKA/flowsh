import { ITodo } from "../models/models";
import { RootStateOrAny } from "../state-manager-library/models/custommodels";
import { useSelector } from "../state-manager-library/state-manager";
import Todo from "./Todo";

export const ListTodos = () => {
    const todos = useSelector((state: RootStateOrAny) => state.todos) as ITodo[]
    return (
        <div className="todos">
            {todos.map(({ id, title, done }: ITodo) =>
                <Todo key={id} todo={{ id, title, done }} />
            ).reverse()}
        </div>
    )
}