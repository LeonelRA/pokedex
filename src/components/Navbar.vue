<script setup>
import Button from '@/components/Btn.vue'
import Hamburger from '@/components/Icons/Hamburger.vue'
import Star from './Icons/Star.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isActive = routeName => {
  return router?.currentRoute?.value?.name === routeName
    ? 'primary'
    : 'secondary'
}
</script>
<template>
  <nav
    class="shadow-navbar fixed bottom-0 left-0 w-full py-[18px] px-[30px] bg-white flex justify-center items-center gap-2.5"
  >
    <Button
      text="All"
      class="w-[150px]"
      :color="isActive('Pokedex')"
      :icon="Hamburger"
      @click="$router.push({ name: 'Pokedex' })"
    />

    <Button
      text="Favorites"
      class="w-[150px]"
      :color="isActive('PokedexFavorites')"
      :icon="Star"
      @click="$router.push({ name: 'PokedexFavorites' })"
    />
  </nav>
</template>
