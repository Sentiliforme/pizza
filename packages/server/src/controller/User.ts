import { getManager } from 'typeorm'
import { User } from '../entity/User'
import { logError } from '../service/logger'

export async function getAllUsers() {
  try {
    const users = await getManager().find(User)
    return users
  } catch (e) {
    logError(e)
  }
}

export async function getById(id: number) {
  try {
    const user = await getManager().findOne(User, id)
    return user
  } catch (e) {
    logError(e)
  }
}

export async function createUser(input: Required<User>) {
  try {
    let user = new User(input)
    user = await getManager().save(user)
    return user
  } catch (e) {
    logError(e)
  }
}

export async function updateUser(id: number, input: Required<User>) {
  try {
    const result = await getManager().update(User, { id }, input)
    return result
  } catch (e) {
    logError(e)
  }
}

export async function deleteUser(id: number) {
  try {
    const result = await getManager().softDelete(User, { id })
    return result
  } catch (e) {
    logError(e)
  }
}
export async function getByUsername() {
  try {
    const user = await getManager().findOne(User, { where: ['username'] })
    return user
  } catch (e) {
    logError(e)
  }
}
