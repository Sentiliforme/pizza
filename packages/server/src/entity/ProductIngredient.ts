import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  PrimaryColumn,
  JoinTable
} from 'typeorm'
import { Product } from './Product'
import { Ingredient } from './Ingredient'

@Entity()
export class ProductIngredient {
  @PrimaryColumn()
  productId: number

  @PrimaryColumn()
  ingredientId: number

  @ManyToOne(type => Product, { onDelete: 'CASCADE' })
  @JoinTable()
  product: Product

  @ManyToOne(type => Ingredient, { onDelete: 'CASCADE' })
  @JoinTable()
  ingredient: Ingredient

  constructor(productId?: number, ingredientId?: number) {
    this.productId = productId
    this.ingredientId = ingredientId
  }
}
