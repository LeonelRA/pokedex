<script setup>
import ButtonStar from '@/components/BtnStar.vue'
import ModalPokemonDescription from '@/components/ModalPokemonDescription.vue'
import pokedexStore from '@/stores/pokedex'
import { ref } from 'vue'

const pokedex = pokedexStore()
const props = defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
})

const removeFromFavorites = pokemon_name =>
  pokedex.setRemoveFavoritePokemon(pokemon_name)

const addToFavorites = pokemon_name =>
  pokedex.setAddFavoritePokemon(pokemon_name)

const handleFavorite = pokemon_name => {
  if (
    pokedex.getFavoritesPokemons?.find(p => p.name === pokemon_name)
      ?.is_favorite
  ) {
    removeFromFavorites(pokemon_name)
  } else {
    addToFavorites(pokemon_name)
  }
}

const pokemonData = ref(null)
const fetchPokemonData = async pokemon_name => {
  const pokemon = await pokedex.fetchPokemonData({ pokemon_name })
  pokemonData.value = pokemon
}
</script>

<template>
  <ul v-if="props.pokemons?.length > 0" class="flex flex-col gap-2.5 pb-[90px]">
    <li
      v-for="pokemon in props.pokemons"
      :key="pokemon.name"
      class="cursor-pointer bg-white rounded-[5px] pr-2.5 pl-5 flex justify-between items-center py-2"
      @click="fetchPokemonData(pokemon.name)"
    >
      <p class="text-[22px] font-bold" v-text="pokemon.name" />
      <ButtonStar
        :is_actived="pokemon.is_favorite"
        @click.stop="handleFavorite(pokemon.name)"
      />
    </li>
  </ul>

  <ModalPokemonDescription
    v-if="pokemonData"
    :pokemon="pokemonData"
    :is_favorite="
      pokedex.getFavoritesPokemons?.some(p => p.name === pokemonData.name)
    "
    @handleFavorite="handleFavorite"
    @closeModal="pokemonData = null"
  />
</template>
