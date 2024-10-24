import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pokedex from '../views/Pokedex.vue'
import PokedexFavorites from '../views/PokedexFavorites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/pokedex',
      name: 'Pokedex',
      component: Pokedex,
    },
    {
      path: '/pokedex-favorites',
      name: 'PokedexFavorites',
      component: PokedexFavorites,
    },
  ],
})

export default router
