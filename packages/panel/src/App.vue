<template>
  <v-app class="nav">
    <v-sheet height="100%">
      <v-navigation-drawer v-model="drawer" app permanent>

        <!-- sidebar TITLE-->
        <v-list-item class="px-2">
          <v-icon>menu</v-icon>
          <v-list-item-title style="margin-left: 5%">Secciones</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <!-- LIST -->
        <v-list>

          <!-- ITEMs LIST -->
          <v-list-item v-for="item in items" :key="item.title" router :to="item.route" link>

            <!-- ICON LIST -->
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <!-- CATEGORIE LIST -->
            <v-list-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <!-- CONTENT -->
      <v-container style="margin-right: 5%">
        <router-view />
      </v-container>
    </v-sheet>
  </v-app>
</template>


<script>
// *                   SCRIPT

export default {
  data: () => {
    return {
      drawer: true,
      items: [
        { title: 'Categoria', icon: 'library_books', route: '/category' },
        { title: 'Productos', icon: 'local_pizza', route: '/product' },
        { title: 'Ingredientes', icon: 'shopping_basket', route: '/ingredient' },
      ]
    }
  },
  name: 'App',
  components: {
    // sideBar,
  }
}
</script>


<style lang="scss">
// *                     SCSS

#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 30px;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr;
}
</style>
