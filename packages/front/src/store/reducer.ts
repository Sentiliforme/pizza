import { Reducer } from 'redux'
import { ActionValues, Action } from '.'
import { SET_ALERT, ADD_PRODUCT_TO_CART, SET_PRODUCTS, REMOVE_PRODUCT_FROM_CART } from './actionNames'
import ProductList from '../components/home/ProductList'
import { addProductToCart } from './actionCreators'

type CartProduct = {
  productId: number
  amount: number
}

export type State = {
  alert?: string
  products: any[]
  cart: {
    products: {
      [productId: number]: CartProduct
    }
  }
}
const initialState: State = {
  alert: undefined,
  products: [],
  cart: {
    products: []
  }
}
export const reducer: Reducer<State, ActionValues> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return handleSetAlert(state, action.payload)
    case ADD_PRODUCT_TO_CART:
      return handleAddProductToCart(state, action.payload)
    case REMOVE_PRODUCT_FROM_CART:
      return handleRemoveProductFromCart(state, action.payload)
    case SET_PRODUCTS:
      return handleSetProducts(state, action.payload)
    default:
      return state
  }
}

function handleSetAlert(state: State, payload: Action['setAlert']['payload']): State {
  return {
    ...state,
    alert: payload.message
  }
}

function handleAddProductToCart(state: State, payload: Action['addProductToCart']['payload']): State {
  const { productId } = payload
  let cartProduct = { ...state.cart.products[productId] }
  if (!cartProduct.productId) cartProduct = { amount: 1, productId }
  else cartProduct = { ...cartProduct, amount: cartProduct.amount + 1 }
  return {
    ...state,
    cart: {
      ...state.cart,
      products: {
        ...state.cart.products,
        [productId]: cartProduct
      }
    }
  }
}

function handleRemoveProductFromCart(state: State, payload: Action['removeProductFromCart']['payload']): State {
  const { productId } = payload
  let cartProduct = { ...state.cart.products[productId] }
  if (!cartProduct.productId) return { ...state }
  else cartProduct = { ...cartProduct, amount: cartProduct.amount - 1 }
  return {
    ...state,
    cart: {
      ...state.cart,
      products: {
        ...state.cart.products,
        [productId]: cartProduct
      }
    }
  }
}

function handleSetProducts(state: State, payload: Action['setProducts']['payload']): State {
  return {
    ...state,
    products: [...payload.products]
  }
}
