import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../components/Menu.vue'


Vue.use(VueRouter)

const routes = [

  { path: '/:tag', component: Menu},

]

const router = new VueRouter({
  routes,
  base: 'dd-blog',
  // Mode history should make url look "normal" without '#', but need to configurate server
  // mode: 'history'
})

export default router
