import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import { Product } from './Product'
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
