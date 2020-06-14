import React, { useState } from 'react'
import CountButton from '../general/CountButton'
import './ListedProduct.scss'

type Props = {
  product: any
}
function ListedProduct({ product }: Props) {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const remove = () => {
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
        <div className="price">${product.price}</div>
        <div className="promo-price">2 x $10.900</div>
        <div className="button-container">
          <CountButton amount={count} onAdd={add} onRemove={remove} />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ListedProduct
