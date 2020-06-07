import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false
const vuetifyOptions = {
  theme: {
    dark: false,
  },
  options: {
    customProperties: true,
  },
  icons: {
    iconfont: 'mdi',
  },
}
new Vue({
  router,
  store,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App),
}).$mount('#app')
