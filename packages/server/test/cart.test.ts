import * as Database from '../src/service/Database'
import { Cart } from '../src/entity/Cart'
import { Product } from '../src/entity/Product'
import { ProductCategory } from '../src/entity/ProductCategory'
import { getManager } from 'typeorm'
import { CartProduct } from '../src/entity/CartProduct'

describe('Cart tests', () => {
  beforeAll(async () => {
    await Database.init()
  }, 55000)

  test('should create a cart with products', async done => {
    const cart = new Cart()
    let cat = new ProductCategory()
    cat.name = 'Especialidades'
    cat = await getManager().save(cat)
    expect(cat.id).toBeTruthy()
    let prod = new Product()
    prod.name = 'Pizza'
    prod.price = 5000
    prod.category = cat
    prod = await getManager().save(prod)
    let cartProduct = new CartProduct()
    cartProduct.cart = cart
    cartProduct.product = prod
    cartProduct = await getManager().save(cartProduct)
    expect(cartProduct.id).toBeTruthy()
    done()
  }, 50000)
})
