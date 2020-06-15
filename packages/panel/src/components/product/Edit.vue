<template>
  <v-app>
    Edit {{productId}}
    <Form v-if="product" :initial-value="product" @onSubmit="editProduct" />
  </v-app>
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
import Form from './Form'
export default {
  name: 'ProductEdit',
  data() {
    return {
      product: undefined,
      isLoading: true,
      productId: this.$route.params.productId
    }
  },
  methods: {
    async editProduct(product, ingredients) {
      const response = await axios.put(BACKEND_URL + '/product/' + this.productId, { product, ingredients })
      if (response) {
        this.$router.back()
      }
    }
  },
  components: {
    Form
  },
  async mounted() {
    const productResponse = await axios.get(BACKEND_URL + '/product/' + this.productId)
    this.product = productResponse.data
    this.isLoading = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
