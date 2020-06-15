import { EntityRepository, AbstractRepository } from 'typeorm'
import { Product } from '../entity/Product'
import { addProductListRecipes } from '../service/ProductDbManager'

@EntityRepository(Product)
export class ProductRepository extends AbstractRepository<Product> {
  async getAllWithRecipe() {
    const products = await this.repository.find({ relations: ['productIngredients', 'productIngredients.ingredient'] })
    addProductListRecipes(products)
    products.forEach(prod => delete prod.productIngredients)
    return products
  }
}
