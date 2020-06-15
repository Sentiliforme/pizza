<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="ingredient.name" label="Nombre" required></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn color="primary" @click="submit()">
          <template v-if="initialValue">Editar</template>
          <template v-else>Agregar</template>
        </v-btn>
        <v-btn
          v-if="initialValue"
          :to="'/ingredient/' + ingredient.id + '/delete'"
          color="secondary"
        >Eliminar</v-btn>
        <v-btn to="/ingredient" v-else>Cancelar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'IngredientForm',
  data() {
    return {
      ingredient: {
        name: ''
      },
      ingredientCategories: [],
      isLoading: true
    }
  },
  props: {
    initialValue: Object
  },
  methods: {
    submit() {
      this.$emit('onSubmit', this.ingredient)
    }
  },
  created() {
    if (this.initialValue) {
      this.ingredient = this.initialValue
    }
  }
}
</script>