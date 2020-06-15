import React from 'react'
import './CountButton.scss'

type Props = {
  amount: number
  onAdd?: () => any
  onRemove?: () => any
}
function CountButton({ amount, onAdd, onRemove }: Props) {
  const isZero = amount === 0
  const handleComponentClick = () => {
    if (isZero && onAdd) {
      onAdd()
    }
  }
  const emphasisContent = isZero ? '+' : amount
  const zeroClass = isZero ? 'zero' : ''
  return (
    <button className={'count-button ' + zeroClass} onClick={handleComponentClick}>
      {isZero && <span className="add-label">Agregar</span>}

      {!isZero && (
        <button className="remove-button" onClick={onRemove}>
          -
        </button>
      )}
      <span className="emphasis">{emphasisContent}</span>
      {!isZero && (
        <button className="add-button" onClick={onAdd}>
          +
        </button>
      )}
    </button>
  )
}

export default CountButton
