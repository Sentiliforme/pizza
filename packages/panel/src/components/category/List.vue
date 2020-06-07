<template>
  <div v-if="isLoading">Cargando...</div>
  <div v-else>

  <v-app>
    <v-data-table :headers="headers" :items="categories" ></v-data-table>
  </v-app>
  </div>
  
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
          text: 'Productos',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Nombre', value: 'name' },
      ],
      categories: [],
      isLoading: true
    }
  },
  props: {
    msg: String
  },
  async mounted() {
    const response = await axios.get(BACKEND_URL + '/category')
    this.categories = response.data
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
