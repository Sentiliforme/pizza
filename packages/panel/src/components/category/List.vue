<template>
  <v-app>
    <v-data-table
      :headers="headers"
      :items="categories"
      :loading="isLoading"
      loading-text="Cargando..."
    >
      <template v-slot:item.actions="{ item }">
        <v-btn small color="primary" :to="'/category/' + item.id" class="mr-3">Editar</v-btn>
        <v-btn small color="secondary" :to="'/category/' + item.id + '/delete'">Eliminar</v-btn>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '@/ENV'
export default {
  name: 'HelloWorld',
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
      categories: [],
      isLoading: true
    }
  },
  async mounted() {
    const response = await axios.get(BACKEND_URL + '/category')
    this.categories = response.data
    this.isLoading = false
    console.log(response.data)
  },
  methods: {
    editCategory(category) {
      const categoryId = category.id
      this.$router.push({ name: 'CategoryEdit', params: { categoryId } })
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
