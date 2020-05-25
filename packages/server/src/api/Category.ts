import express from 'express'
import { getCategory, getAllCategories } from '../controller/category'

const router = express.Router()

router.get('/', async (req, res) => {
  const categories = await getAllCategories()
  res.send(categories)
})

router.get('/:categoryId', async (req, res) => {
  const categoryId = parseInt(req.params.categoryId)
  const category = await getCategory(categoryId)
  if (category) {
    res.send(category)
  } else {
    res.status(404).send({
      error: 'No encontrado',
    })
  }
})

export default router
