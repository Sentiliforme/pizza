import { Reducer } from 'redux'
import { ActionValues, Action } from '.'
import { SET_ALERT } from './actionNames'

export type State = {
  alert?: string
  playerId: string
}
const initialState: State = {
  alert: undefined,
  playerId: ''
}
export const reducer: Reducer<State, ActionValues> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return handleSetAlert(state, action.payload)
    default:
      return state
  }
}

function handleSetAlert(state: State, payload: Action['setAlert']['payload']): State {
  return {
    ...state,
    alert: payload.message
  }
}
