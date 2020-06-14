import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './Product'

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Product, product => product.category)
  products: Product[]

  constructor(obj: Partial<ProductCategory> = {}) {
    Object.assign(this, obj)
  }
}
