import { getManager, FindManyOptions } from 'typeorm'
import { Category } from '../entity/Category'
import { Product } from '../entity/Product'
import { logError } from '../service/logger'

export async function getAllCategories(includeProducts = false) {
  try {
    const findConfig: FindManyOptions<Category> = {}
    if (includeProducts) {
      findConfig.relations = ['products']
    }
    const categories = await getManager().find(Category, findConfig)
    return categories
  } catch (e) {
    logError(e)
  }
}

export async function createCategory(input: Category) {
  try {
    let category = new Category(input)
    category = await getManager().save(Category, category)
    return category
  } catch (e) {
    logError(e)
  }
}

export async function getCategory(categoryId: number) {
  try {
    const category = await getManager().findOne(Category, categoryId)
    return category
  } catch (e) {
    logError(e)
  }
}

export async function getAllProducts() {
  try {
    const products = await getManager().find(Product)
    return products
  } catch (e) {
    logError(e)
  }
}

export async function createProduct(input: Product) {
  try {
    let product = new Product(input)
    product = await getManager().save(Product, product)
    return product
  } catch (e) {
    logError(e)
  }
}

export async function addProductToCategory(productId: number, categoryId: number) {
  const category = await getManager().findOne(Category, categoryId)
  let product = await getManager().findOne(Product, productId)
  if (!category || !product) return { error: 'Product or Category not found', code: 404 }
  product.category = category
  product = await getManager().save(product)
  return true
}

export async function getProduct(productId: number) {
  try {
    const product = await getManager().findOne(Product, productId)
    return product
  } catch (e) {
    logError(e)
  }
}
