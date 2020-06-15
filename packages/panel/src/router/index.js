import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import CategoryList from '../components/category/List.vue'
import CategoryEdit from '../components/category/Edit.vue'
import ProductList from '../components/product/List.vue'
import ProductEdit from '../components/product/Edit.vue'
import IngredientList from '../components/ingredient/List.vue'

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
    path: '/product/:productId',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/ingredient',
    name: 'IngredientList',
    component: IngredientList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
