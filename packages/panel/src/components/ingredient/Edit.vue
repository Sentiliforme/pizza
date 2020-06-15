<template>
  <v-app>
    <Form v-if="ingredient" :initial-value="ingredient" @onSubmit="editIngredient" />
  </v-app>
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
import Form from './Form.vue'

export default {
  name: 'ProductEdit',
  data() {
    return {
      ingredient: undefined,
      isLoading: true,
      ingredientId: this.$route.params.ingredientId
    }
  },

  methods: {
    async editIngredient(newValue) {
      const response = await axios.put(BACKEND_URL + '/ingredient/' + this.ingredientId, newValue)
      if (response) {
        this.$router.back()
      }
    }
  },
  components: {
    Form
  },
  async created() {
    const ingredientResponse = await axios.get(BACKEND_URL + '/ingredient/' + this.ingredientId)
    this.ingredient = { ...ingredientResponse.data }
    this.isLoading = false
  }
}
</script>

<style scoped lang="scss">
</style>
