import express from 'express'
import { getAllUsers, getById, updateUser, deleteUser, newUser } from '../controller/User'
//import { login } from '../controller/Auth'

const router = express.Router()

/*router.post('/login', async (req, res) => {
  const users = await login(req.body.username, req.body.password)
  res.send(users)
})
*/
router.get('/user', async (req, res) => {
  const users = await getAllUsers()
  res.send(users)
})

router.post('/register', async (req, res) => {
  const users = await newUser(req.body)
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
