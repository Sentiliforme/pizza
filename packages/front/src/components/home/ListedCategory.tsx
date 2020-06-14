import React from 'react'
import ProductList from './ProductList'
import './ListedCategory.scss'

type Props = {
  category: any
}
function ListedCategory({ category }: Props) {
  return (
    <div className="listed-category">
      <h3 className="name">{category.name}</h3>
      <ProductList products={category.products} />
    </div>
  )
}

export default ListedCategory
