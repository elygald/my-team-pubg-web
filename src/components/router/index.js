import Vue from 'vue'
import Router from 'vue-router'
import Main from '../home/Main.vue'
import Login from '../login/Login.vue'

Vue.use(Router)
const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login }
];

export default new Router({
  routes
})