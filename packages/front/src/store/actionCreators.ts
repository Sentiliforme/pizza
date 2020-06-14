import { SET_ALERT } from './actionNames'

export const setAlert = (message: string) => ({
  type: SET_ALERT,
  payload: {
    message
  }
})
