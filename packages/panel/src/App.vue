<template>
  <div id="app">
    <div id="nav">
      <div class="sideBar">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
          <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .sideBar {
    position: fixed;
    height: 100%;
    background: red;
    width: 25%;
    top: 0;
    left: 0;
    overflow-x: hidden;/* Disable horizontal scroll */
    z-index: 2;
    padding-top: 60px;
    transition: 0.5s;
  }
  .content{
    margin-left: 25%;
  }
}
</style>
