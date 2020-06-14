import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { ProductCategory } from './ProductCategory'
import { Ingredient } from './Ingredient'
import { ProductIngredient } from './ProductIngredient'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: number

  //precio con promo
  @Column()
  promoPrice: number

  // cuantos para aplicar promo
  @Column()
  promoAmount: number

  @Column()
  containsMeat: boolean

  @ManyToOne(type => ProductCategory, { nullable: true })
  category: ProductCategory

  @OneToMany(
    type => ProductIngredient,
    productIngredient => productIngredient.product
  )
  productIngredients: ProductIngredient[]

  constructor(obj: Partial<Product> = {}) {
    Object.assign(this, obj)
  }
}
