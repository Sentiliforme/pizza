import express from 'express'
import {
  getAllIngredients,
  addIngredient,
  getIngredient,
  editIngredient,
  deleteIngredient
} from '../controller/Ingredient'

const router = express.Router()

router.get('/ingredient', async (req, res) => {
  const ingredients = await getAllIngredients()
  res.send(ingredients)
})

router.post('/ingredient', async (req, res) => {
  const ingredients = await addIngredient(req.body)
  res.send(ingredients)
})

router.get('/ingredient/:ingredientId', async (req, res) => {
  const ingredient = await getIngredient(parseInt(req.params.ingredientId))
  res.send(ingredient)
})

router.put('/ingredient/:ingredientId', async (req, res) => {
  const result = await editIngredient(parseInt(req.params.ingredientId), req.body)
  res.send(result)
})

router.delete('/ingredient/:ingredientId', async (req, res) => {
  const result = await deleteIngredient(parseInt(req.params.ingredientId))
  res.send(result)
})

export default router
