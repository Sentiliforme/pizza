import * as passport from 'passport'
import { Response, Request } from 'express'
import {
  getById,
  updateUser,
  getByUsername,
  createUser
} from '../controller/User'
import * as bcrypt from 'bcrypt'
import { User } from '../entity/User'

let LocalStrategy = require('passport-local').Strategy

export default async function setupPassport() {
  passport.use(
    'local',
    new LocalStrategy(async function (username: string, password: string, done: Function) {
      const user = await getByUsername()
      if (!user) {
        done(null, false, { message: 'Could not find that user' })
      } else {
        const passwordIsCorrect = await user.validatePassword(password)
        if (passwordIsCorrect) {
          setTimeout(() => done(null, user), Math.floor(Math.random() * 20))
        } else {
          setTimeout(
            () => done(null, false, { message: 'Incorrect password' }),
            Math.floor(Math.random() * 20)
          )
        }
      }
    })
  )

  passport.serializeUser(function (user: User, done: Function) {
    done(null, user.id)
  })

  passport.deserializeUser(async function (id: number, done) {
    const user = await getById(id)
    if (user) {
      done(null, user)
    } else {
      done(null, {})
    }
  })
  async function registerUser(req: Request, response: Response) {
    const { username, password } = req.body
    const user = await getByUsername()
    response.setHeader('Content-Type', 'application/json')

    if (user) {
      response.statusCode = 403
      response.send(JSON.stringify('User already exists'))
    } else {
      const hashedPassword = await hashPassword(password)
      const newUser = new User(user)

      newUser.username = username
      newUser.setPassword(hashedPassword)

      const createdUser: User = await createUser(newUser)

      response.send(JSON.stringify(createdUser))
    }
  }

  async function hashPassword(password: string, saltRounds: number = 10) {
    return await bcrypt.hash(password, saltRounds)
  }
}
