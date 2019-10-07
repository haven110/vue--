import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

Vue.prototype.http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
