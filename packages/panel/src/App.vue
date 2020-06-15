<template>
  <!-- qwerty -->
  <v-app>
    <v-sheet>
      <SideBar />
      <v-main>
        <!-- CONTENT -->
        <v-container class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-sheet>
  </v-app>
</template>


<script>
import SideBar from '@/components/SideBar'
export default {
  data: () => {
    return {
      drawer: true,
      items: [
        { title: 'Categoria', icon: 'library_books', route: '/category' },
        { title: 'CategoriaTable', icon: 'library_books', route: '/categoryTable' },
        { title: 'Productos', icon: 'local_pizza', route: '/product' },
        { title: 'Ingredientes', icon: 'shopping_basket', route: '/ingredient' }
      ]
    }
  },
  name: 'App',
  components: {
    SideBar
  }
}
</script>


<style lang="scss">
</style>
