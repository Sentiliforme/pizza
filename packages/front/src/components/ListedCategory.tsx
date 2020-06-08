import React from 'react'
import ListedProduct from './ListedProduct'

type Props = {
  category: any
}
function ListedCategory({ category }: Props) {
  return (
    <div>
      <div>
        <strong>{category.name}</strong>
      </div>
      <div>
        {category.products.map((product: any) => (
          <ListedProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default ListedCategory
