import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinTable } from 'typeorm'
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

  @Column({ default: true })
  display: boolean

  @OneToMany(type => ProductIngredient, productIngredient => productIngredient.product, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinTable()
  productIngredients: ProductIngredient[]

  recipe?: string

  constructor(obj: Partial<Product> = {}) {
    Object.assign(this, obj)
  }
}
