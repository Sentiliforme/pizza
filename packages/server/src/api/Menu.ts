import express from 'express'
import {
  getCategory,
  getAllCategories,
  createCategory,
  createProduct,
  addProductToCategory,
  getAllProducts
} from '../controller/Menu'

const router = express.Router()

router.get('/category', async (req, res) => {
  const includeProducts = req.query.includeProducts === 'true'
  const categories = await getAllCategories(includeProducts)
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

router.get('/product', async (req, res) => {
  const product = await getAllProducts()
  res.send(product)
})

router.post('/product', async (req, res) => {
  const product = await createProduct(req.body)
  res.send(product)
})

// Add a product to a category
router.put('/category/:categoryId/product/:productId', async (req, res) => {
  const categoryId = parseInt(req.params.categoryId)
  const productId = parseInt(req.params.productId)
  const saved = await addProductToCategory(productId, categoryId)
  res.send(saved)
})

export default router
