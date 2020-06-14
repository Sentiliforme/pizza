import React from 'react'
import './CartSummary.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-cart-solid.svg'

function CartSummary() {
  return (
    <div className="cart-summary">
      <div className="left">
        <ShoppingIcon />
        <div className="total-price">$9.990</div>
      </div>
      <div className="right">
        <button className="continue-button">CONTINUAR ></button>
      </div>
    </div>
  )
}

export default CartSummary
