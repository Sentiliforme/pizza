import express from 'express'

import {
  createProductCategory,
  getProductCategory,
  deleteProductCategory,
  editProductCategory,
} from '../controller/Menu'
import { getAllProductCategories } from '../controller/Menu'

const router = express.Router()

// TODO: Split Menu and Category

router.get('/category', async (req, res) => {
  const includeProducts = req.query.includeProducts === 'true'
  const categories = await getAllProductCategories(includeProducts)
  res.send(categories)
})

router.post('/category', async (req, res) => {
  const category = req.body
  const createdCategory = await createProductCategory(category)
  if (createdCategory) {
    res.send(createdCategory)
  } else {
    res.status(500).send('ERROR') //TODO :Handle different type of errors
  }
})

router.get('/category/:categoryId', async (req, res) => {
  const categoryId = parseInt(req.params.categoryId)
  const category = await getProductCategory(categoryId)
  if (category) {
    res.send(category)
  } else {
    res.status(404).send({
      error: 'No encontrado',
    })
  }
})

router.delete('/category/:categoryId', async (req, res) => {
  const result = await deleteProductCategory(parseInt(req.params.categoryId))
  res.send(result)
})

router.put('/category/:categoryId', async (req, res) => {
  const result = await editProductCategory(parseInt(req.params.categoryId), req.body)
  res.send(result)
})

export default router
