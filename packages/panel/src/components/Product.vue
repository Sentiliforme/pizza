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
          value: 'name',
        },
        { text: 'Codigo', value: 'id' },
        { text: 'Nombre', value: 'name' },
        { text: 'precio (clp)', value: 'price' },
        { text: 'Codigo categoria', value: 'categoryId' },
        { text: 'Ingredientes', value: 'Ingredients' },
      ],
    }
  },
  name: 'Productos',
  props: {
    msg: String,
  },
}
</script>

<style></style>