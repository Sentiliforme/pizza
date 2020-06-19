import { Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { CustomProduct } from './CustomProduct'
import { Cart } from './Cart'

@Entity()
export class CartCustomProduct {
  @PrimaryColumn()
  productId: number

  @PrimaryColumn()
  cartId: number

  @ManyToOne(type => CustomProduct, { cascade: true })
  customProduct: CustomProduct

  @ManyToOne(type => Cart, { cascade: true })
  cart: Cart
}
