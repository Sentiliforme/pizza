import bcrypt from 'bcrypt-nodejs'
import { getAllUsers, getUser } from './controller/User'
import { User } from './entity/User'
import { Strategy as JwtStrategy } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'

/*passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Neko',
  })
)
*/
export default function (passport) {
  passport.use(
    'Register',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      async function (req, username, password, done) {
        const users = await getAllUsers()
        if (err) {
          return done(err)
        }
        if (users == username) {
          return done(
            null,
            false,
            req.flash('registerMessage', 'El nombre de usuario ya esta en uso')
          )
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
