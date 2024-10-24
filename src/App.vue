<script setup>
import Loader from '@/components/Loader.vue'
import Navbar from '@/components/Navbar.vue'
import pokedexStore from '@/stores/pokedex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const pokedex = pokedexStore()
const router = useRouter()
const showNavbar = computed(() => router.currentRoute.value.name !== 'Home')
</script>
<template>
  <Loader v-if="pokedex.isLoading" />

  <main>
    <RouterView />
  </main>
  <Navbar v-if="showNavbar" />
</template>
