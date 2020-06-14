import React from 'react'
import { useSelector } from 'react-redux'
import { getAlert } from '../../store'

function Alert() {
  const message = useSelector(getAlert)
  return <div>{message}</div>
}

export default Alert
