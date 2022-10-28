import './App.css'
import { AddTodo } from './components/AddTodo'
import { ListTodos } from './components/ListTodos'
import { Provider } from './state-manager-library/state-manager'
import { store } from './state-manager-user/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todos</h1>
        <ListTodos />
        <AddTodo />
      </div>
    </Provider>
  )
}

export default App
