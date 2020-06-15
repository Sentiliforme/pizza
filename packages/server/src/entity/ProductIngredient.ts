import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import { Product } from './Product'
import { Ingredient } from './Ingredient'

@Entity()
export class ProductIngredient {
  @PrimaryColumn()
  productId: number

  @PrimaryColumn()
  ingredientId: number

  @ManyToOne(type => Product, { onDelete: 'CASCADE' })
  product: Product

  @ManyToOne(type => Ingredient, { onDelete: 'CASCADE' })
  ingredient: Ingredient
}
