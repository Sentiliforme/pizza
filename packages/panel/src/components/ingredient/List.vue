<template>
  <v-app>
    <v-data-table
      :headers="headers"
      :items="ingredients"
      :loading="isLoading"
      loading-text="Cargando..."
    >
      <template v-slot:item.actions="{ item }">
        <v-btn small color="primary" :to="'/ingredient/' + item.id" class="mr-3">Editar</v-btn>
        <v-btn small color="secondary" :to="'/ingredient/' + item.id + '/delete'">Eliminar</v-btn>
      </template>
    </v-data-table>
    <v-btn color="primary" to="/ingredient/add">Nuevo</v-btn>
  </v-app>
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
export default {
  name: 'IngredientList',
  data() {
    return {
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id'
        },
        { text: 'Nombre', value: 'name' },
        { text: 'Acciones', value: 'actions', sortable: false }
      ],
      ingredients: [],
      isLoading: true
    }
  },
  async mounted() {
    const response = await axios.get(BACKEND_URL + '/ingredient')
    this.ingredients = response.data
    this.isLoading = false
    console.log(response.data)
  },
  methods: {
    editIngredient(ingredient) {
      const ingredientId = ingredient.id
      this.$router.push({ name: 'IngredientEdit', params: { ingredientId } })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
