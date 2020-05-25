import { getManager } from 'typeorm'
import { Category } from '../entity/Category'

export async function getAllCategories() {
  const categories = getManager().find(Category)
  return categories
}

export async function getCategory(categoryId: number) {
  try {
    const category = await getManager().findOne(Category, categoryId)
    return category
  } catch (e) {
    console.error(e)
  }
}
