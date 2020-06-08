import React from 'react'

type Props = {
  product: any
}
function ListedProduct({ product }: Props) {
  return (
    <div>
      <div>{product.name}</div>
      <div>${product.price}</div>
    </div>
  )
}

export default ListedProduct
