import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { CartProduct } from './CartProduct'

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => CartProduct, cartProduct => cartProduct.cart)
  cartProducts: CartProduct[]
}
