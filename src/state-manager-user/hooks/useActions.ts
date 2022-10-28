import React from 'react'
import { useDispatch } from '../../state-manager-library/state-manager'

const useActions = () => {
    const dispatch = useDispatch()
    const addBy = (payload: any) => dispatch({ type: "ADD_TASK", payload })
    const removeBy = (payload: any) => dispatch({ type: "REMOVE_TASK", payload })
    return { addBy, removeBy }
}

export default useActions