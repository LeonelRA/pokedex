const POKE_API_URL = import.meta.env.VITE_POKE_API || 'https://pokeapi.co/api'

class ApiClient {
  constructor(base_url = POKE_API_URL, contentType = 'application/json') {
    this.base_url = base_url
    this.headers = {
      'Content-Type': contentType,
      accept: contentType,
    }
  }

  async request(endpoint, method, body = null) {
    const requestConfig = {
      method,
      headers: {
        ...this.headers,
      },
      body: body,
    }

    const _path = `${this.base_url}/${endpoint}`
    const response = await fetch(`${_path}`, requestConfig)

    const data = await response.json()
    return data
  }

  async get(endpoint, config) {
    return this.request(endpoint, 'GET', config)
  }
}

export const apiClient = new ApiClient()
