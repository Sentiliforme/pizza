import express from 'express'
import { getCategory, getAllCategories, createCategory } from '../controller/category'

const router = express.Router()

router.get('/category', async (req, res) => {
  const categories = await getAllCategories()
  res.send(categories)
})

router.post('/category', async (req, res) => {
  const category = req.body
  const createdCategory = await createCategory(category)
  if (createdCategory) {
    res.send(createdCategory)
  } else {
    res.status(500).send('ERROR') //TODO :Handle different type of errors
  }
})

router.get('/category/:categoryId', async (req, res) => {
  const categoryId = parseInt(req.params.categoryId)
  const category = await getCategory(categoryId)
  if (category) {
    res.send(category)
  } else {
    res.status(404).send({
      error: 'No encontrado'
    })
  }
})

export default router
