import express from 'express'
import {
  getProductCategory,
  getAllProductCategories,
  createProductCategory,
  createProduct,
  addProductToCategory,
  getAllProducts,
  getProduct,
  getAllIngredients,
  addIngredient,
  getIngredient,
  editIngredient,
  deleteIngredient,
  editProduct,
  deleteProduct,
  deleteProductCategory
} from '../controller/Menu'

const router = express.Router()

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
      error: 'No encontrado'
    })
  }
})

router.delete('/category/:categoryId', async (req, res) => {
  const result = await deleteProductCategory(parseInt(req.params.categoryId))
  res.send(result)
})

router.get('/product', async (req, res) => {
  const product = await getAllProducts()
  res.send(product)
})

router.get('/product/:productId', async (req, res) => {
  const productId = parseInt(req.params.productId)
  const product = await getProduct(productId)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({
      error: 'No encontrado'
    })
  }
})

router.post('/product', async (req, res) => {
  const { product, ingredients } = req.body
  const response = await createProduct(product, ingredients)
  res.send(!!response)
})

router.put('/product/:productId', async (req, res) => {
  const { product, ingredients } = req.body
  const response = await editProduct(parseInt(req.params.productId), product, ingredients)
  res.send(!!response)
})

router.delete('/product/:productId', async (req, res) => {
  const result = await deleteProduct(parseInt(req.params.productId))
  res.send(result)
})

// Add a product to a category
router.put('/category/:categoryId/product/:productId', async (req, res) => {
  const categoryId = parseInt(req.params.categoryId)
  const productId = parseInt(req.params.productId)
  const saved = await addProductToCategory(productId, categoryId)
  res.send(saved)
})

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
