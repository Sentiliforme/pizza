import { Reducer } from 'redux'
import { ActionValues, Action } from '.'
import { SET_PLAYER_ID } from './actionNames'

export type State = {
  playerId: string
}
const initialState: State = {
  playerId: ''
}
export const reducer: Reducer<State, ActionValues> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_ID:
      return handleSetPlayerId(state, action.payload)
    default:
      return state
  }
}

function handleSetPlayerId(state: State, payload: Action['setPlayerId']['payload']): State {
  return {
    ...state,
    playerId: payload.id
  }
}
