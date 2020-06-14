import React, { useState } from 'react'
import CountButton from '../general/CountButton'
import './ListedProduct.scss'
import { useDispatch } from 'react-redux'
import { addProductToCart, removeProductFromCart } from '../../store'
import { formatPrice } from '../../helper/format'

type Props = {
  product: any
}
function ListedProduct({ product }: Props) {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const add = () => {
    dispatch(addProductToCart(product.id))
    setCount(count + 1)
  }
  const remove = () => {
    dispatch(removeProductFromCart(product.id))
    setCount(count - 1)
  }
  return (
    <div className="listed-product">
      <div className="info">
        <div className="image"></div>
        <div className="data">
          <h2 className="name">{product.name}</h2>
          <p className="description">Tomate, mozarella, albahaca fresca, sal, aceite</p>
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
