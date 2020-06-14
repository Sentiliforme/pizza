import React from 'react'
import ListedProduct from './ListedProduct'

type Props = {
  products: any[]
}
function ProductList({ products }: Props) {
  return (
    <div className="product-list">
      {products.map((product: any) => (
        <ListedProduct product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList
