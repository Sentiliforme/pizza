import { getManager, FindManyOptions } from 'typeorm'
import { ProductCategory } from '../entity/ProductCategory'
import { logError } from '../service/logger'
import { addProductListRecipes } from '../helper/Menu'

// TODO: Split Menu and Category

export async function getAllProductCategories(
  includeProducts = false,
  includeProductRecipe = true
) {
  try {
    const findConfig: FindManyOptions<ProductCategory> = {}
    findConfig.relations = []
    if (includeProducts) {
      findConfig.relations.push('products')
      findConfig.where = {
        products: { enabled: 1 },
      }
      if (includeProductRecipe) {
        findConfig.relations.push(
          'products.productIngredients',
          'products.productIngredients.ingredient'
        )
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
    const response = await getManager().softDelete(ProductCategory, { id })
    return !!response
  } catch (e) {
    logError(e)
  }
}

export async function editProductCategory(id: number, input: Partial<ProductCategory>) {
  try {
    const response = await getManager().update(ProductCategory, { id }, input)
    return !!response
  } catch (e) {
    logError(e)
  }
}
