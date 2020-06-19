import { getManager } from 'typeorm'
import { Product } from '../entity/Product'
import { logError } from '../service/logger'
import { ProductCategory } from '../entity/ProductCategory'
import { ProductIngredient } from '../entity/ProductIngredient'
import { ProductRepository } from '../repository/ProductRepository'
import { Ingredient } from '../entity/Ingredient'
import { insertIgnore } from '../service/Database'

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

export async function createProduct(input: Partial<Product>, ingredients: Ingredient[]) {
  try {
    let product = new Product(input)
    product = await getManager().save(product)
    if (ingredients.length) {
      product.productIngredients = ingredients.map(ingredient => {
        return {
          ingredient,
          product
        } as ProductIngredient
      })
      await getManager().save(product)
    }
    return product
  } catch (e) {
    logError(e)
  }
}

export async function editProduct(
  productId: number,
  input: Partial<Product>,
  ingredients: Ingredient[]
) {
  try {
    const productRepo = getManager().getCustomRepository(ProductRepository)
    input.productIngredients = ingredients.map(ing => new ProductIngredient(productId, ing.id))
    const response = await productRepo.updateWithIngredients(productId, input)
    return response
    //const response = await insertIgnore(ProductIngredient, productIngredients)
    //return response
  } catch (e) {
    logError(e)
  }
}

export async function deleteProduct(id: number) {
  try {
    const product = await getManager().findOne(Product, id)
    if (!product) throw new Error('404')
    const response = await getManager().remove(product)
    return !!response
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
