import bcrypt from 'bcrypt-nodejs'
import { getAllUsers, getUser } from './controller/User'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const User = require('./entity/User')
const JwtStrategy = require('passport-jwt').Strategy
//const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local').Strategy

/*passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Neko',
  })
)
*/
module.exports = function (passport) {
  passport.use(
    'Register',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordFiel: 'password',
        passReqToCallback: true,
      },
      async function (req, username, password, err, done) {
        const users = await getAllUsers()
        if (err) {
          return done(err)
        }
        if (users == username) {
          return done(null, false, req.flash('registerMessage', 'El nombre de usuario ya esta en uso'))
        }
      }
    )
  )
  passport.use(
    'Login',
    new JwtStrategy(async function (payload, req, done) {
      const users = await getUser(User)
      User.findById(payload._id, function (err, username, password) {
        if (err) {
          return done(err)
        }
        if (username != users.username) {
          return done(null, false, req.flash('loginMessage', 'Usuario no encontrado'))
        }
        if (!bcrypt.compareSync(password, users.password))
          return done(null, false, req.flash('loginMessage', 'Oops! Contraseña incorrecta'))

        return done(null, users.username)
      })
    })
  )
}
