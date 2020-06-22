import express from 'express'
import { getUser, getAllUsers, createUser } from '../controller/user'
import passport from 'passport'

const router = express.Router()

router.post(
  '/login',
  passport.authenticate('Login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }),
  function (req) {
    console.log('Bienvenido')
    if (req.body.remember) {
      req.cookies.maxAge = 1000 * 60 * 3
    } else {
      req.cookies.expires = false
    }
  }
)

router.post(
  '/register',
  passport.authenticate('Register', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  })
)

// eslint-disable-next-line @typescript-eslint/no-empty-function
router.get('/profile', isLoggedIn, function (req, res) {})

router.get('/logout', function (req, res) {
  res.redirect('/')
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
}
router.get('/user/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId)
  const user = await getUser(userId)
  if (user) {
    res.send(user)
  } else {
    res.status(404).send({
      error: 'Not Found'
    })
  }
})

export default router
