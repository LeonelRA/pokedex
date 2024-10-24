import { apiClient } from '@/api/client'

export const apiFetchPokemons = () => apiClient.get('v2/pokemon')
export const apiFetchPokemonData = pokemon_name =>
  apiClient.get(`v2/pokemon/${pokemon_name}`)
