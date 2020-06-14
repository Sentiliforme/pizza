import React from 'react'
import './CountButton.scss'

type Props = {
  amount: number
}
function CountButton({ amount }: Props) {
  const isZero = amount === 0
  const emphasisContent = isZero ? '+' : amount
  const zeroClass = isZero ? 'zero' : ''
  return (
    <button className={'count-button ' + zeroClass}>
      {isZero && <div className="add-label">Agregar</div>}

      {!isZero && <div className="remove-button">-</div>}
      <div className="emphasis">{emphasisContent}</div>
      {!isZero && <div className="add-button">+</div>}
    </button>
  )
}

export default CountButton
