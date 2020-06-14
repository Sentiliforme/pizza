import React from 'react'
import './CartSummary.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-cart-solid.svg'
import { useSelector } from 'react-redux'
import { getCartValue } from '../../store'
import { formatPrice } from '../../helper/format'
import { useHistory } from 'react-router-dom'

function CartSummary() {
  const cartValue = useSelector(getCartValue)
  const history = useHistory()
  const next = () => {
    history.push('/confirm')
  }
  return (
    <div className="cart-summary">
      <div className="left">
        <ShoppingIcon />
        <div className="total-price">{formatPrice(cartValue)}</div>
      </div>
      <div className="right">
        <button className="continue-button" onClick={next}>CONTINUAR ></button>
      </div>
    </div>
  )
}

export default CartSummary
