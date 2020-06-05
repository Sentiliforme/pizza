<template>
  <v-app>
    <v-sheet height="100%">
      <v-container>
        <H1>HOLA</H1>
        <router-view />
      </v-container>

      <v-navigation-drawer v-model="drawer" absolute>
        <v-list-item class="px-2">
          <v-list-item-title>Secciones</v-list-item-title>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-content>
        </v-list-item>
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
        { title: 'Categoria', icon: 'mdi-home-city' },
        { title: 'Productos', icon: 'mdi-account' },
        { title: 'Ingredientes', icon: 'mdi-account-group-outline' }
      ],
      mini: true,
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
