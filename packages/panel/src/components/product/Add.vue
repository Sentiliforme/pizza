<template>
  <Form @onSubmit="addProduct" />
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
import Form from './Form.vue'

export default {
  name: 'IngredientAdd',
  data() {
    return {
      valid: false,
      isLoading: false
    }
  },
  components: {
    Form
  },
  methods: {
    async addProduct(product, ingredients) {
      try {
        this.isLoading = true
        const response = await axios.post(BACKEND_URL + '/product', { product, ingredients })

        if (response.data) this.$router.push('/product')
        this.isLoading = false
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
