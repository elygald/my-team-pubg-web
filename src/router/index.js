import VueRouter from 'vue-router'
import Main from '../components/home/Main.vue'
import Login from '../components/registration/RegistrationAndLogin.vue'
import Init from '../components/init/Init.vue'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
  { path: '/init', component: Init },
  { path: '*', redirect: '/' },
]

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router