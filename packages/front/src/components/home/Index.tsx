import React from 'react'
import CategoryList from './CategoryList'
import CartSummary from '../general/CartSummary'

function Home() {
  return (
    <div>
      <CategoryList />
      <CartSummary />
    </div>
  )
}

export default Home
