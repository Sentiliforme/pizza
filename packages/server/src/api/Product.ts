import express from 'express'
import {
  getAllProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct
} from '../controller/Product'

const router = express.Router()

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
  res.send(response)
})

router.delete('/product/:productId', async (req, res) => {
  const result = await deleteProduct(parseInt(req.params.productId))
  res.send(result)
})

export default router
