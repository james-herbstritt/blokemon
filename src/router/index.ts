import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/pokemon_info',
    name: 'pokemon_info',
    component: () => import('../views/PokemonInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
