import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, DeleteDateColumn } from 'typeorm'
import { IngredientCategory } from './IngredientCategory'

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => IngredientCategory, { nullable: true })
  category?: IngredientCategory

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date

  constructor(obj: Partial<Ingredient> = {}) {
    Object.assign(this, obj)
  }
}
