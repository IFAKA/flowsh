import useInput from "../hooks/useInput"
import useActions from "../state-manager-user/hooks/useActions"

export const AddTodo = () => {
    const { value, handleChange, reset } = useInput()
    const { addBy } = useActions()
    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        !!value && (addBy(value), reset())
    }

    return (
        <form className="add-todo" onSubmit={addTodo}>
            <input
                autoFocus
                value={value}
                onChange={handleChange}
                placeholder="Type here then press enter"
            />
        </form>
    )
}