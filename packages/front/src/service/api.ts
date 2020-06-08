import axiosLib from 'axios'
import { BACKEND_URL } from '../ENV'

const axios = axiosLib.create({
  baseURL: BACKEND_URL
})

export async function getMenu() {
  try {
    const response = await axios.get('/category', { params: { includeProducts: true } })
    const categories = response.data as any[]
    return { categories }
  } catch (e) {
    console.error(e)
    return { categories: [] }
  }
}
