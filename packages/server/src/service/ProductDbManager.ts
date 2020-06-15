import { Product } from '../entity/Product'
import R from 'ramda'
import { createRecipeText } from '../helper/Menu'

export function addProductRecipe(product: Product) {
  const ingredients = R.flatten(product.productIngredients.map(pi => pi.ingredient))
  product.recipe = createRecipeText(ingredients)
  return product
}

export function addProductListRecipes(products: Product[]) {
  products.forEach(addProductRecipe)
  return products
}
