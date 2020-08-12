import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export const eventBus = new Vue({
  methods: {
    naviToggle(isToggle){
      console.log('main.js' , isToggle)
      this.$emit("naviToggle", isToggle)
    }
  },
})
