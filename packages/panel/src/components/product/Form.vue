<template>
  <v-form>
    <v-text-field v-model="product.name" label="Nombre" required />
    <v-text-field type="number" v-model="product.price" label="Precio" required />
    <v-switch v-model="product.display" class="ma-2" label="Mostrar" />
     <v-autocomplete
      v-model="product.category"
      :disabled="isLoading"
      :items="categories"
      outlined
      filled
      color="blue-grey lighten-2"
      label="Categoría"
      item-text="name"
      item-value="name"
      return-object
    >
      <template v-slot:item="data">
        <template>
          <v-list-item-content v-text="data.item.name"></v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
    <v-row>
      Promo?
      <v-switch v-model="hasPromo" class="ma-2" label="Incluir promo"></v-switch>
    <v-text-field type="number" v-model="product.promoAmount" :disabled="!hasPromo" required />
    X
    <v-text-field type="number" v-model="product.promoPrice" :disabled="!hasPromo" required />
    </v-row>
    
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
      return-object
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
    <v-row>
      <v-btn color="primary" @click="submit()">
        <template v-if="initialValue">Editar</template>
        <template v-else>Agregar</template>
      </v-btn>
      <v-btn
        v-if="initialValue"
        :to="'/product/' + product.id + '/delete'"
        color="secondary"
      >Eliminar</v-btn>
      <v-btn to="/product" v-else>Cancelar</v-btn>
    </v-row>
  </v-form>
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
export default {
  name: 'ProductForm',
  data() {
    return {
      isLoading: true,
      hasPromo: false,
      product: {
        name: '',
        price: undefined,
        promoAmount: 2,
        promoPrice: undefined,
        display: true
      },
      selectedIngredients: [],
      allIngredients: [],
      categories: []
    }
  },
  methods: {
    submit() {
      this.$emit('onSubmit', this.product, this.selectedIngredients)
    }
  },
  props: {
    initialValue: Object
  },
  async mounted() {
    const categoriesResponse = await axios.get(BACKEND_URL + '/category')
    this.categories = categoriesResponse.data
    const ingredientsResponse = await axios.get(BACKEND_URL + '/ingredient')
    this.allIngredients = ingredientsResponse.data
    console.log(this.allIngredients)
    this.isLoading = false
  },
  created() {
    if (this.initialValue) {
      this.product = this.initialValue
      this.selectedIngredients = this.product.productIngredients.map(pi => pi.ingredient)
    }
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
