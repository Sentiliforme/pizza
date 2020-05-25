import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Product } from './Product'
import { Cart } from './Cart'

@Entity()
export class CartProduct {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: number

  @Column()
  cartId: number

  @ManyToOne(type => Product, { cascade: true })
  product: Product

  @ManyToOne(type => Cart, { cascade: true })
  cart: Cart
}
