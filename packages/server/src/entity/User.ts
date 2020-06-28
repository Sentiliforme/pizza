import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import * as bcrypt from 'bcrypt'
@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  username: string
  @Column({
    type: 'string',
    nullable: false,
  })
  password: string
  setPassword(pw: string) {
    this.password = pw
  }
  @Column({
    type: 'varchar',
    nullable: false
  })
  async validatePassword(plainTextPassword: string) {
		return await bcrypt.compare(plainTextPassword, this.password + '')
  }
  @Column({
    type: 'varchar'
  })
  email: string
  constructor(obj: Required<User>) {
    Object.assign(this, obj)
  }
}
