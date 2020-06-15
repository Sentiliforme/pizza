<template>
  <confirm-delete
    v-if="category"
    entity-name="Categoría"
    :name="category.name"
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
      category: undefined,
      isLoading: true,
      categoryId: this.$route.params.categoryId
    }
  },
  components: {
    ConfirmDelete
  },
  methods: {
    async onConfirm() {
      const response = await axios.delete(BACKEND_URL + '/category/' + this.categoryId)
      if (response) {
        this.$router.replace('/category')
      }
    },
    async onCancel() {
      this.$router.replace('/category')
    }
  },
  async created() {
    const categoryResponse = await axios.get(BACKEND_URL + '/category/' + this.categoryId)
    this.category = { ...categoryResponse.data }
    this.isLoading = false
  }
}
</script>

<style scoped lang="scss">
</style>
