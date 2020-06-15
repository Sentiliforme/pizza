import { getManager, FindManyOptions } from 'typeorm'
import { ProductCategory } from '../entity/ProductCategory'
import { Product } from '../entity/Product'
import { logError } from '../service/logger'
import { ProductRepository } from '../repository/ProductRepository'
import { addProductListRecipes } from '../helper/Menu'
import { Ingredient } from '../entity/Ingredient'
import { ProductIngredient } from '../entity/ProductIngredient'
import { IngredientCategory } from '../entity/IngredientCategory'

export async function getAllProductCategories(includeProducts = false, includeProductRecipe = true) {
  try {
    const findConfig: FindManyOptions<ProductCategory> = {}
    findConfig.relations = []
    if (includeProducts) {
      findConfig.relations.push('products')
      findConfig.where = {
        products: { enabled: 1 }
      }
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

export async function createProductCategory(input: ProductCategory) {
  try {
    let category = new ProductCategory(input)
    category = await getManager().save(ProductCategory, category)
    return category
  } catch (e) {
    logError(e)
  }
}

export async function getProductCategory(categoryId: number) {
  try {
    const category = await getManager().findOne(ProductCategory, categoryId)
    return category
  } catch (e) {
    logError(e)
  }
}

export async function deleteProductCategory(id: number) {
  try {
    const category = await getManager().findOne(ProductCategory, id)
    if (!category) throw new Error('404')
    const response = await getManager().remove(category)
    return !!response
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

export async function editProduct(id: number, input: Partial<Product>, ingredients: Ingredient[]) {
  try {
    const product = await getManager().findOne(Product, id)
    if (!product) throw new Error('404')
    for (const key in input) {
      product[key] = input[key]
    }
    delete product.productIngredients
    await getManager().save(product)

    if (ingredients.length) {
      for (const ingredient of ingredients) {
        const pi = new ProductIngredient()
        pi.ingredient = ingredient
        pi.product = product
        await getManager()
          .createQueryBuilder()
          .insert()
          .into(ProductIngredient)
          .values(pi)
          .orIgnore(true)
          .execute()
      }
    }
    return true
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

export async function getAllIngredients() {
  try {
    const ingredients = await getManager().find(Ingredient)
    return ingredients
  } catch (e) {
    logError(e)
  }
}

export async function addIngredient(input: Partial<Ingredient>) {
  try {
    let ingredient = new Ingredient(input)
    ingredient = await getManager().save(ingredient)
    return ingredient
  } catch (e) {
    logError(e)
  }
}

export async function getIngredient(id: number) {
  try {
    const ingredient = await getManager().findOne(Ingredient, id)
    return ingredient
  } catch (e) {
    logError(e)
  }
}

export async function editIngredient(id: number, input: Partial<Ingredient>) {
  try {
    let ingredient = await getIngredient(id)
    if (!ingredient) throw new Error('404')
    for (const key in input) {
      ingredient[key] = input[key]
    }
    const response = await getManager().save(ingredient)
    return !!response
  } catch (e) {
    logError(e)
  }
}

export async function deleteIngredient(id: number) {
  try {
    const ingredient = await getIngredient(id)
    if (!ingredient) throw new Error('404')
    const response = await getManager().remove(ingredient)
    return !!response
  } catch (e) {
    logError(e)
  }
}
