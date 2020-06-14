import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Cart } from './Cart'
import { CustomProductIngredient } from './CustomProductIngredient'

@Entity()
export class CustomProduct {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: number

  @ManyToOne(type => CustomProductIngredient, cpi => cpi.customProduct)
  ingredients: CustomProductIngredient[]
  
  @ManyToOne(type => Cart, { cascade: true })
  cart: Cart
}
