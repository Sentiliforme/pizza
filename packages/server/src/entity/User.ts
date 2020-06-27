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
    type: 'varchar',
    nullable: false
  })
  password: string
  @Column({
    type: 'varchar',
    nullable: false
  })
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10)
  }
  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password)
  }
  @Column({
    type: 'varchar'
  })
  email: string
  constructor(obj: Required<User>) {
    Object.assign(this, obj)
  }
}
