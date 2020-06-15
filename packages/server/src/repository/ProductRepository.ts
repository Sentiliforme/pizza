import { EntityRepository, AbstractRepository } from 'typeorm'
import { Product } from '../entity/Product'
import { addProductListRecipes } from '../helper/Menu'

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
}
