<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Eliminar {{entityName}}</div>
        <v-list-item-subtitle>¿Eliminar {{name}}?</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="onConfirm()">Eliminar</v-btn>
      <v-btn text @click="onCancel()">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'ConfirmDelete',
  props: {
    name: String,
    entityName: String
  },
  methods: {
    onConfirm() {
      this.$emit('onConfirm')
    },
    onCancel() {
      this.$emit('onCancel')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
