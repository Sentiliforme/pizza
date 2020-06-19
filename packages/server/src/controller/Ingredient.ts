import { getManager } from 'typeorm'
import { logError } from '../service/logger'
import { Ingredient } from '../entity/Ingredient'

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
    const response = await getManager().update(Ingredient, { id }, input)
    return !!response
  } catch (e) {
    logError(e)
  }
}

export async function deleteIngredient(id: number) {
  try {
    const response = await getManager().softDelete(Ingredient, { id })
    return !!response
  } catch (e) {
    logError(e)
  }
}
