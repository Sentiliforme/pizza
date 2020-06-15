<template>
  <v-app>
    Edit {{ categoryId }}
  </v-app>
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
export default {
  name: 'ProductList',
  data() {
    return {
      headers: [
        {
          text: 'id',
          align: 'start',
          sortable: false,
          value: 'id'
        },
        { text: 'Nombre', value: 'name' },
        { text: 'Precio', value: 'price' },
        { text: 'Promo', value: 'promoPrice' },
        { text: 'Receta', value: 'recipe' },
        { text: 'Acciones', value: 'actions', sortable: false }
      ],
      products: [],
      isLoading: true,
      categoryId: this.$route.params.categoryId
    }
  },
  methods: {
    editProduct (product) {
      console.log('edit', product)
    }
  },
  props: {
    msg: String
  },
  async mounted() {
    const response = await axios.get(BACKEND_URL + '/product')
    this.products = response.data
    this.isLoading = false
    console.log(response.data)
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
