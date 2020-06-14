import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Ingredient } from './Ingredient'

@Entity()
export class IngredientCategory {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(
    type => Ingredient,
    ingredient => ingredient.category
  )
  ingredients: Ingredient

  constructor(obj: Partial<IngredientCategory> = {}) {
    Object.assign(this, obj)
  }
}
