import { getManager, FindManyOptions } from 'typeorm'
import { ProductCategory } from '../entity/ProductCategory'
import { Product } from '../entity/Product'
import { logError } from '../service/logger'

export async function getAllCategories(includeProducts = false) {
  try {
    const findConfig: FindManyOptions<ProductCategory> = {}
    if (includeProducts) {
      findConfig.relations = ['products']
    }
    const categories = await getManager().find(ProductCategory, findConfig)
    return categories
  } catch (e) {
    logError(e)
  }
}

export async function createCategory(input: ProductCategory) {
  try {
    let category = new ProductCategory(input)
    category = await getManager().save(ProductCategory, category)
    return category
  } catch (e) {
    logError(e)
  }
}

export async function getCategory(categoryId: number) {
  try {
    const category = await getManager().findOne(ProductCategory, categoryId)
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
  const category = await getManager().findOne(ProductCategory, categoryId)
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
