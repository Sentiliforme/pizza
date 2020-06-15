import * as Database from '../src/service/Database'
import { Cart } from '../src/entity/Cart'
import { Product } from '../src/entity/Product'
import { ProductCategory } from '../src/entity/ProductCategory'
import { getManager } from 'typeorm'
import { CartProduct } from '../src/entity/CartProduct'
import { createRecipeText } from '../src/helper/Menu'
import { Ingredient } from '../src/entity/Ingredient'
import { ProductRepository } from '../src/repository/ProductRepository'

describe('Product recipe tests', () => {
  beforeAll(async () => {
    await Database.init()
  }, 55000)

  test('should get text from helper', async done => {
    const ingredients: Ingredient[] = [
      { id: 0, name: 'Palta' },
      { id: 1, name: 'Tomate' },
      { id: 2, name: 'Mayo' }
    ]
    const recipeText = createRecipeText(ingredients)
    expect(recipeText).toBe('Palta, tomate y mayo')
    done()
  }, 50000)

  test('should get from db', async done => {
    const productRepo = getManager().getCustomRepository(ProductRepository)
    const products = await productRepo.getAllWithRecipe()
    expect(products.length).toBeTruthy()
    expect(products[0].recipe.length).toBeTruthy()
    done()
  })
})
