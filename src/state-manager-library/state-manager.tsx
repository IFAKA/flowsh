import { createContext, useContext, useEffect, useState } from "react"
import { IStore, ProviderProps, Reducer, Selector, Sub } from "./models/custommodels"

const Context = createContext<IStore | null>(null)

export const Provider = ({ store, children }: ProviderProps) => (
  <Context.Provider value={store}>{children}</Context.Provider>)

export const useDispatch = () => {
  const { dispatch } = useContext(Context) as IStore
  return dispatch
}

const getSpecificState = (store: IStore, selector: Selector) => {
  const states = store.getState()
  const specificState = selector(states)
  return specificState
}

export const useSelector = (selector: Selector) => {
  const store = useContext(Context) as IStore
  const initState = getSpecificState(store, selector)
  const [value, setValue] = useState(initState)
  useEffect(() => {
    store.subscribe(() => {
      const newState = getSpecificState(store, selector)
      setValue(newState)
    })
  }, [])
  return value
}

export const createStore = (reducer: Reducer, initialState: any): IStore => {
  let state = initialState
  const subscribers: Sub[] = []
  return {
    getState() { return state },
    dispatch(action) {
      state = reducer(state, action)
      subscribers.forEach(sub => sub())
    },
    subscribe(fn: () => void) { subscribers.push(fn) }
  }
} 