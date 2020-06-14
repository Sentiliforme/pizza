//import { createSelector } from 'reselect'
import { State } from '.'
export const getPlayerId = (state: State) => state.playerId
/*
export const getCurrentTurn = (state: State) => 'asd'

export const getTurnType = createSelector([getCurrentTurn, getPlayerId], (turn, pId) => {
  if (turn === pId) return true
  else return false
})
*/
export const getAlert = (state: State) => state.alert
