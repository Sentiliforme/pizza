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
    <div className={'count-button ' + zeroClass} onClick={handleComponentClick}>
      {isZero && <div className="add-label">Agregar</div>}

      {!isZero && (
        <button className="remove-button" onClick={onRemove}>
          -
        </button>
      )}
      <div className="emphasis">{emphasisContent}</div>
      {!isZero && (
        <button className="add-button" onClick={onAdd}>
          +
        </button>
      )}
    </div>
  )
}

export default CountButton
