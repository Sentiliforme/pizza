import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ExclusionPolicy, Expose, Strategy } from 'typeserializer'
@Entity()
@Strategy(ExclusionPolicy.ALL)
export class User {
  @PrimaryGeneratedColumn()
  @Expose()
  userId: number

  @Column()
  @Expose()
  username: string

  @Column()
  password: string

  constructor(obj: Partial<User> = {}) {
    Object.assign(this, obj)
  }
}
