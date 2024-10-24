import {
  apiFetchPokemons,
  apiFetchPokemonData,
} from '@/api/pokedex/fetchPokemons'
import { defineStore } from 'pinia'

export default defineStore('pokedex', {
  state: () => ({
    status: 'initial',
    pokemons: [],
  }),
  getters: {
    isLoading: state => state.status === 'loading',
    isError: state => state.status === 'error',
    isReady: state => state.status === 'ready',
    getPokemons: state => state.pokemons,
    getFavoritesPokemons: state =>
      state.pokemons.filter(pokemon => pokemon.is_favorite),
  },
  actions: {
    async fetchAllPokemons() {
      this.setLoading()
      const response = await apiFetchPokemons()

      if (response) {
        this.setPokemons(response.results)
        this.setReady()
      } else {
        this.setError()
      }
    },
    async fetchPokemonData({ pokemon_name }) {
      const response = await apiFetchPokemonData(pokemon_name)

      if (response) {
        this.setReady()
        return response
      } else {
        this.setError()
      }
    },
    setPokemons(pokemons) {
      this.pokemons = pokemons
    },
    setAddFavoritePokemon(pokemon_name) {
      const pokemon = this.pokemons.find(p => p.name === pokemon_name)
      if (pokemon) pokemon.is_favorite = true
    },
    setRemoveFavoritePokemon(pokemon_name) {
      const pokemon = this.pokemons.find(p => p.name === pokemon_name)
      if (pokemon) pokemon.is_favorite = false
    },
    setLoading() {
      this.status = 'loading'
    },
    setError() {
      this.status = 'error'
    },
    setReady() {
      this.status = 'ready'
    },
  },
})
