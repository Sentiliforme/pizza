import express from 'express'
import MenuApi from './api/Menu'
import ProductApi from './api/Product'
import IngredientApi from './api/Ingredient'
import UserApi from './api/User'

const router = express.Router()

// register routers
router.use(MenuApi)
router.use(ProductApi)
router.use(IngredientApi)
router.use(UserApi)

export default router
