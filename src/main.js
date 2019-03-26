import Vue from 'vue'
//import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './components/router'


//Vue.config.productionTip = false
//Vue.use(BootstrapVue)
Vue.use(router)

new Vue({
  router,
}).$mount('#app')
