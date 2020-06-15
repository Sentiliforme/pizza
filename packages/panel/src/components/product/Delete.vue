<template>
  <confirm-delete
    v-if="product"
    entity-name="Producto"
    :name="product.name"
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
      product: undefined,
      isLoading: true,
      productId: this.$route.params.productId
    }
  },
  components: {
    ConfirmDelete
  },
  methods: {
    async onConfirm() {
      const response = await axios.delete(BACKEND_URL + '/product/' + this.productId)
      if (response) {
        this.$router.replace('/product')
      }
    },
    async onCancel() {
      this.$router.replace('/product')
    }
  },
  async created() {
    const productResponse = await axios.get(BACKEND_URL + '/product/' + this.productId)
    this.product = { ...productResponse.data }
    this.isLoading = false
  }
}
</script>

<style scoped lang="scss">
</style>
