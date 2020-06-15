import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import CategoryList from '../components/category/List.vue'
import CategoryEdit from '../components/category/Edit.vue'
import ProductList from '../components/product/List.vue'
import ProductEdit from '../components/product/Edit.vue'
import ProductAdd from '../components/product/Add.vue'
import ProductDelete from '../components/product/Delete.vue'
import IngredientList from '../components/ingredient/List.vue'
import IngredientAdd from '../components/ingredient/Add.vue'
import IngredientEdit from '../components/ingredient/Edit.vue'
import IngredientDelete from '../components/ingredient/Delete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/category',
    name: 'CategoryList',
    component: CategoryList
  },
  {
    path: '/category/:categoryId',
    name: 'CategoryEdit',
    component: CategoryEdit
  },
  {
    path: '/product',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product/add',
    name: 'ProductAdd',
    component: ProductAdd
  },
  {
    path: '/product/:productId',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/product/:productId/delete',
    name: 'ProductDelete',
    component: ProductDelete
  },
  {
    path: '/ingredient',
    name: 'IngredientList',
    component: IngredientList
  },
  {
    path: '/ingredient/add',
    name: 'IngredientAdd',
    component: IngredientAdd
  },
  {
    path: '/ingredient/:ingredientId',
    name: 'IngredientEdit',
    component: IngredientEdit
  },
  {
    path: '/ingredient/:ingredientId/delete',
    name: 'IngredientDelete',
    component: IngredientDelete
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
