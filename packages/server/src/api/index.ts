import express from 'express'
import categoryRouter from './Category'

const router = express.Router()

// register routers
router.use(categoryRouter)

export default router
