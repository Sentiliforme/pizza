import { getManager, FindManyOptions } from 'typeorm'
import { ProductCategory } from '../entity/ProductCategory'
import { Product } from '../entity/Product'
import { logError } from '../service/logger'
import { ProductRepository } from '../repository/ProductRepository'
import { addProductListRecipes } from '../helper/Menu'
import { Ingredient } from '../entity/Ingredient'

export async function getAllCategories(includeProducts = false, includeProductRecipe = true) {
  try {
    const findConfig: FindManyOptions<ProductCategory> = {}
    findConfig.relations = []
    if (includeProducts) {
      findConfig.relations.push('products')
      if (includeProductRecipe) {
        findConfig.relations.push('products.productIngredients', 'products.productIngredients.ingredient')
      }
    }
    const categories = await getManager().find(ProductCategory, findConfig)
    if (includeProducts && includeProductRecipe) {
      for (const category of categories) {
        addProductListRecipes(category.products)
      }
    }
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
    //const products = await getManager().find(Product)
    const productRepo = getManager().getCustomRepository(ProductRepository)
    const products = await productRepo.getAllWithRecipe()
    return products
  } catch (e) {
    logError(e)
  }
}

export async function getProduct(productId: number) {
  try {
    const productRepo = getManager().getCustomRepository(ProductRepository)
    const product = await productRepo.getWithIngredients(productId)
    return product
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

export async function getAllIngredients() {
  try {
    const ingredients = await getManager().find(Ingredient)
    return ingredients
  } catch (e) {
    logError(e)
  }
}
