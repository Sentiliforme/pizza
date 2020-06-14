import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { CartProduct } from './CartProduct'
import { CustomProduct } from './CustomProduct'

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => CartProduct, cartProduct => cartProduct.cart)
  products: CartProduct[]

  @OneToMany(type => CustomProduct, customProduct => customProduct.cart)
  customProducts: CustomProduct[]
}
