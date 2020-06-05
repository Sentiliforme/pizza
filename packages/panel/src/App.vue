<template>
  <v-app>
    <v-sheet height="100%">
      <v-container>
        <router-view />
      </v-container>

      <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" absolute>
        <!-- sidebar dexcripción -->
        <v-list-item class="px-2">
          <v-icon>menu</v-icon>
          <v-list-item-title>Secciones</v-list-item-title>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
          <!-- lista de items -->
          <v-list-item v-for="item in items" :key="item.title" router :to="item.route" link>
            <!-- lista de iconos -->
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <!-- lista de contenidos -->
            <v-list-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-content>
          </v-list-item>
        </v-list>
        <!-- lista de iconos -->
      </v-navigation-drawer>
    </v-sheet>
  </v-app>
</template>
<script>
// import sideBar from './components/SideBar'
export default {
  data: () => {
    return {
      drawer: true,
      items: [
        { title: 'Categoria', icon: 'library_books', route: '/categorias' },
        { title: 'Productos', icon: 'local_pizza', route: '/productos' },
        { title: 'Ingredientes', icon: 'shopping_basket', route: '/ingredientes' }
      ],
      mini: true
    }
  },
  name: 'App',
  components: {
    // sideBar,
  }
}
</script>
<style lang="scss">
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 30px;
  display: grid;
  height: 100%;
  width: 100%;
}
</style>
