const loggingMiddleware = ({ getState }) => next => action => {
  if (process.env.NODE_ENV !== 'production') {
    console.group(action.type)
    console.info('dispatching', action)
    const result = next(action)
    console.log('next state', getState())
    console.groupEnd()
    return result
  } else {
    return next(action)
  }
}

export default loggingMiddleware
