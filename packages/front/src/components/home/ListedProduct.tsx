import React, { useState } from 'react'
import CountButton from '../general/CountButton'
import './ListedProduct.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, removeProductFromCart, getProductAmount } from '../../store'
import { formatPrice } from '../../helper/format'
import { ReactComponent as PizzaIcon } from '../../assets/svg/pizza-icon.svg'

type Props = {
  product: any
}
function ListedProduct({ product }: Props) {
  const count = useSelector(getProductAmount(product.id))
  const dispatch = useDispatch()
  const add = () => {
    dispatch(addProductToCart(product.id))
  }
  const remove = () => {
    dispatch(removeProductFromCart(product.id))
  }
  return (
    <div className="listed-product">
      <div className="info">
        <div className="image">
          {/* <PizzaIcon /> */}
          <img src={require('../../assets/img/mechada.jpg')} />
        </div>
        <div className="data">
          <h2 className="name">{product.name}</h2>
          <p className="description">{product.recipe}</p>
        </div>
      </div>
      <div className="footer">
        <div className="price">{formatPrice(product.price)}</div>
        <div className="promo-price">
          {product.promoAmount} x {formatPrice(product.promoPrice)}
        </div>
        <div className="button-container">
          <CountButton amount={count} onAdd={add} onRemove={remove} />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ListedProduct
