import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { Cart } from './Cart'
import { CustomProductIngredient } from './CustomProductIngredient'

@Entity()
export class CustomProduct {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(type => CustomProductIngredient, cpi => cpi.customProduct)
  customProductIngredients: CustomProductIngredient[]

  @ManyToOne(type => Cart, { cascade: true })
  cart: Cart
}
