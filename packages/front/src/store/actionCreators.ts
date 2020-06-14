import { SET_ALERT, ADD_PRODUCT_TO_CART, SET_PRODUCTS, REMOVE_PRODUCT_FROM_CART } from './actionNames'

export const setAlert = (message: string) => ({
  type: SET_ALERT,
  payload: {
    message
  }
})

export const addProductToCart = (productId: number) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    productId
  }
})

export const removeProductFromCart = (productId: number) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: {
    productId
  }
})


export const setProducts = (products: any[]) => ({
  type: SET_PRODUCTS,
  payload: {
    products
  }
})
