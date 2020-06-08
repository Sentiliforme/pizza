import React, { useEffect, useState } from 'react'
import { getMenu } from '../service/api'
import ListedCategory from './ListedCategory'

type Props = {}
function Home({}: Props) {
  const [categories, setCategories] = useState<any>([])
  async function loadCategories() {
    const { categories } = await getMenu()
    setCategories(categories)
  }
  useEffect(() => {
    loadCategories()
  }, [])
  return (
    <div>
      <h2>Categories:</h2>
      {categories.map((category: any) => (
        <ListedCategory category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Home
