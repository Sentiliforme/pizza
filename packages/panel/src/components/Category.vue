<template>
  <v-app>
    <v-data-table :headers="headers"></v-data-table>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Productos',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Codigo', value: 'id' },
        { text: 'Nombre', value: 'name' }
      ]
    }
  },
  name: 'Categorias',
  props: {
    msg: String
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
