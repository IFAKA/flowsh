import { initialState } from "../models/initialStates";
import { createStore } from "../state-manager-library/state-manager";
import { reducer } from "./reducer";

export const store = createStore(reducer, initialState)
