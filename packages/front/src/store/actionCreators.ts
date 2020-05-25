import { SET_PLAYER_ID } from './actionNames'

export const setPlayerId = (id: string) => ({
  type: SET_PLAYER_ID,
  payload: {
    id
  }
})
