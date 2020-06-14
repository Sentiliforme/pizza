import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Product } from './Product'
import { Ingredient } from './Ingredient'

@Entity()
export class ProductIngredient {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: number

  @Column()
  ingredientId: number

  @ManyToOne(type => Product, { cascade: true })
  product: Product

  @ManyToOne(type => Ingredient, { cascade: true })
  ingredient: Ingredient
}
