import { EntityRepository, AbstractRepository, getManager } from 'typeorm'
import { Product } from '../entity/Product'
import { addProductListRecipes } from '../helper/Menu'
import { Ingredient } from '../entity/Ingredient'
import { ProductIngredient } from '../entity/ProductIngredient'
import { insertIgnore } from '../service/Database'
import R from 'ramda'

const ingredientsRelations = ['productIngredients', 'productIngredients.ingredient']
@EntityRepository(Product)
export class ProductRepository extends AbstractRepository<Product> {
  async getAllWithRecipe() {
    const products = await this.repository.find({ relations: ingredientsRelations })
    addProductListRecipes(products)
    products.forEach(prod => delete prod.productIngredients)
    return products
  }
  async getWithIngredients(id: number) {
    const product = await this.repository.findOne(id, { relations: ingredientsRelations })
    return product
  }
  async updateWithIngredients(id: number, partial: Partial<Product>) {
    const newIngredients = partial.productIngredients
    const previousIngredients = await this.manager.find(ProductIngredient, { productId: id })
    await insertIgnore(ProductIngredient, newIngredients)
    const toDelete = previousIngredients.filter(ing => !R.includes(ing, newIngredients))
    await this.manager.remove(ProductIngredient, toDelete)
    return true
  }
}
