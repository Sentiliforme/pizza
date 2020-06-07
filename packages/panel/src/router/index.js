import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CategoryTable from '../components/Category.vue'
import Ingredient from '../components/Ingredient.vue'
import Product from '../components/Product.vue'
import Category from '../views/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/CategoryTable',
    name: 'categoryTable',
    component: CategoryTable,
  },
  {
    path: '/ingredient',
    name: 'ingredient',
    component: Ingredient,
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
