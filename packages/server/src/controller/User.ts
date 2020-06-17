import { getManager } from 'typeorm'
import { User } from '../entity/User'
import { serialize } from 'typeserializer'

export async function getAllUsers() {
  const connection = await this.connection
  const users = await connection.getManager().find(User)
  return serialize(users)
}

export async function createUser(input: User) {
  try {
    let user = new User(input)
    user = await getManager().save(User, user)
    return user
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export async function getUser(userId: number) {
  try {
    const user = await getManager().findOne(User, userId)
    return user
  } catch (e) {
    console.error(e)
  }
}

export async function deleteUser(userId: number) {
  try {
    const user = await getManager().delete(User, userId)
    return user
  } catch (e) {
    console.error(e)
  }
}
