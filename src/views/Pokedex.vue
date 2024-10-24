<script setup>
import Button from '@/components/Btn.vue'
import Input from '@/components/Input.vue'
import PokemonList from '@/components/PokemonList.vue'
import pokedexStore from '@/stores/pokedex'
import { computed, onMounted, ref } from 'vue'

const pokedex = pokedexStore()

onMounted(async () => {
  if (pokedex.getPokemons?.length > 0) return
  await pokedex.fetchAllPokemons({ search: '' })
})

const searchPokemon = ref('')
const pokemons = computed(() =>
  searchPokemon.value
    ? pokedex.getPokemons?.filter(p =>
        p.name.toLowerCase().includes(searchPokemon.value.toLowerCase()),
      )
    : pokedex.getPokemons,
)
</script>

<template>
  <div class="py-[35px]">
    <Input
      type="text"
      placeholder="Search"
      class="mb-[40px]"
      v-model="searchPokemon"
    />

    <PokemonList :pokemons="pokemons" />

    <div v-if="pokemons?.length <= 0" class="text-center">
      <h1 class="mb-2.5 text-4xl">Uh-oh!</h1>
      <p class="mb-[25px]">You look lost on your journey!</p>
      <Button
        class="m-auto"
        @click="$router.push({ name: 'Home' })"
        text="Go back home"
      />
    </div>
  </div>
</template>
