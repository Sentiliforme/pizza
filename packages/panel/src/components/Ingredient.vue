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
        { text: 'Marca', value: 'bran' },
        { text: 'Cantidad', value: 'amount' },
      ],
    }
  },
  name: 'Ingredientes',
  props: {
    msg: String,
  },
}
</script>

<style></style>