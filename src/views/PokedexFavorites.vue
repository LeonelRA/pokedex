<script setup>
import Input from '@/components/Input.vue'
import PokemonList from '@/components/PokemonList.vue'
import pokedexStore from '@/stores/pokedex'
import { computed, ref } from 'vue'

const pokedex = pokedexStore()

const searchPokemon = ref('')
const pokemons = computed(() => {
  const favoritesPokemons = pokedex.getFavoritesPokemons

  return searchPokemon.value
    ? favoritesPokemons?.filter(p =>
        p.name.toLowerCase().includes(searchPokemon.value.toLowerCase()),
      )
    : favoritesPokemons
})
</script>
<template>
  <div class="py-[35px]">
    <Input
      type="text"
      placeholder="Search"
      v-model="searchPokemon"
      class="mb-[50px]"
    />
    <PokemonList :pokemons="pokemons" />
  </div>
</template>
