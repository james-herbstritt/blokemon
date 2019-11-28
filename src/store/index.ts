import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedPokemon: null
  },
  mutations: {
    selectPokemon (state, pokemon) {
      state.selectedPokemon = pokemon
      console.log('Selecting pokemon', pokemon)
      console.log('Selected pokemon', state.selectedPokemon)
    }
  },
  actions: {
  },
  modules: {
  }
})
