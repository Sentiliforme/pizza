import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { IngredientCategory } from './IngredientCategory'

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => IngredientCategory, { nullable: true })
  category?: IngredientCategory

  constructor(obj: Partial<Ingredient> = {}) {
    Object.assign(this, obj)
  }
}
