import express from 'express'
import { getAllUsers, getById, updateUser, deleteUser, createUser, getByUsername } from '../controller/User'
import passport from 'passport'

const router = express.Router()
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/home'
}), async (req, res) => {
    const user = await getByUsername()
    res.send(user)
}
)
router.get('/user', async (req, res) => {
  const users = await getAllUsers()
  res.send(users)
})

router.post('/register', async (req, res) => {
  const users = await createUser(req.body)
  res.send(users)
})

router.get('/user/:userId', async (req, res) => {
  const user = await getById(parseInt(req.params.userId))
  res.send(user)
})

router.put('/user/:userId', async (req, res) => {
  const result = await updateUser(parseInt(req.params.userId), req.body)
  res.send(result)
})

router.delete('/user/:userId', async (req, res) => {
  const result = await deleteUser(parseInt(req.params.userId))
  res.send(result)
})

export default router
