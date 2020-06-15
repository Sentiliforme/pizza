<template>
  <v-app>
    Edit {{productId}}
    <h2>Ingredients:</h2>
    <div
      v-for="productIngredient in product.productIngredients"
      :key="productIngredient.ingredientId"
    >{{productIngredient.ingredient.name}}</div>

    <v-autocomplete
      v-model="selectedIngredients"
      :disabled="isLoading"
      :items="allIngredients"
      outlined
      filled
      chips
      color="blue-grey lighten-2"
      label="Receta"
      item-text="name"
      item-value="name"
      multiple
    >
      <template v-slot:selection="data">
        <v-chip
          v-bind="data.attrs"
          :input-value="data.selected"
          close
          @click="data.select"
          @click:close="remove(data.item)"
        >{{ data.item.name }}</v-chip>
      </template>
      <template v-slot:item="data">
        <template>
          <v-list-item-content v-text="data.item.name"></v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
  </v-app>
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
export default {
  name: 'ProductEdit',
  data() {
    return {
      product: {},
      isLoading: true,
      productId: this.$route.params.productId,
      selectedIngredients: [],
      allIngredients: []
    }
  },
  methods: {
    editProduct(product) {
      console.log('edit', product)
    }
  },
  props: {
    msg: String
  },
  async mounted() {
    const productResponse = await axios.get(BACKEND_URL + '/product/' + this.productId)
    const ingredientsResponse = await axios.get(BACKEND_URL + '/ingredient')
    this.allIngredients = ingredientsResponse.data
    this.product = productResponse.data
    this.selectedIngredients = this.product.productIngredients.map(pi => pi.ingredient)
    this.isLoading = false
    console.log(productResponse.data)
    console.log('ingredients:', this.ingredients)
    // console.log(ingredientsResponse.data)
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
