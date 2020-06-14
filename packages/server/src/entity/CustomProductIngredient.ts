import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { CustomProduct } from './CustomProduct'
import { Ingredient } from './Ingredient'

@Entity()
export class CustomProductIngredient {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  customProductId: number

  @Column()
  ingredientId: number

  @ManyToOne(type => CustomProduct, { cascade: true })
  customProduct: CustomProduct

  @ManyToOne(type => Ingredient, { cascade: true })
  ingredient: Ingredient
}
