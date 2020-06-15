import { Product } from '../entity/Product'
import R from 'ramda'
import { Ingredient } from '../entity/Ingredient'

function capitalizeFirstLetter(input: string) {
  return input[0].toUpperCase() + input.slice(1)
}
export function createRecipeText(ingredients: Ingredient[]) {
  const n = ingredients.length
  return ingredients.reduce((text, ingredient, i) => {
    const name = i === 0 ? capitalizeFirstLetter(ingredient.name) : ingredient.name.toLowerCase()
    const comma = i !== 0 && i !== n - 1 ? ', ' : ''
    const and = i === n - 1 && i !== 0 ? ' y ' : ''
    return text + and + comma + name
  }, '')
}

export function addProductRecipe(product: Product) {
  const ingredients = R.flatten(product.productIngredients.map(pi => pi.ingredient))
  product.recipe = createRecipeText(ingredients)
  return product
}

export function addProductListRecipes(products: Product[], includeProductIngredients = true) {
  products.forEach(addProductRecipe)
  if (!includeProductIngredients) products.forEach(prod => delete prod.productIngredients)
  return products
}
