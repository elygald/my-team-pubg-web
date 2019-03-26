import VueRouter from 'vue-router'
import Main from '@/components/home/Main.vue'
import Login from '@/components/login/Login.vue'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
  { path: '/main', component: Main },
  { path: '/login', component: Login },
]

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router