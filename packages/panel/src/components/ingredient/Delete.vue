<template>
  <confirm-delete
    v-if="ingredient"
    entity-name="Ingrediente"
    :name="ingredient.name"
    @onConfirm="onConfirm"
    @onCancel="onCancel"
  />
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
import ConfirmDelete from '../general/ConfirmDelete.vue'

export default {
  name: 'ProductEdit',
  data() {
    return {
      ingredient: undefined,
      isLoading: true,
      ingredientId: this.$route.params.ingredientId
    }
  },
  components: {
    ConfirmDelete
  },
  methods: {
    async onConfirm() {
      const response = await axios.delete(BACKEND_URL + '/ingredient/' + this.ingredientId)
      if (response) {
        this.$router.replace('/ingredient')
      }
    },
    async onCancel() {
      this.$router.replace('/ingredient')
    }
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
