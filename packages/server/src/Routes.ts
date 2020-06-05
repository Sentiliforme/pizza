import express from 'express'
import menuRouter from './api/Menu'

const router = express.Router()

// register routers
router.use(menuRouter)

export default router
