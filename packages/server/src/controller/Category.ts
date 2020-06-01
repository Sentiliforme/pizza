import { getManager } from 'typeorm'
import { Category } from '../entity/Category'
import { ICategory } from '@r/types/ICategory'

export async function getAllCategories() {
  const categories = getManager().find(Category)
  return categories
}

export async function createCategory(input: ICategory) {
  try {
    let category = Object.assign({}, input)
    category = await getManager().save(Category, category)
    return { ...input, ...category }
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export async function getCategory(categoryId: number) {
  try {
    const category = await getManager().findOne(Category, categoryId)
    return category
  } catch (e) {
    console.error(e)
  }
}
