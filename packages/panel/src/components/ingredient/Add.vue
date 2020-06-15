<template>
  <Form @onSubmit="addIngredient" />
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
    async addIngredient(ingredient) {
      try {
        this.isLoading = true
        const response = await axios.post(BACKEND_URL + '/ingredient', ingredient)
        console.log(response.data)
        if (response.data) this.$router.push('/ingredient')
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
