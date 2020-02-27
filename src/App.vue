<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark" id="nav">
      <div class="container">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <router-link class="nav-item" to="/pokemon_info"
          >PokemonInfo</router-link
        >
        <form class="form-inline" role="search" id="searchForm">
          <input
            class="form-control"
            type="search"
            id="pokemonSearch"
            maxlength="20"
            form="searchForm"
            placeholder="Pokemon Name"
            @keydown.enter="searchPokemon"
            autocomplete="on"
            required
            v-model="searchText"
          />
          <button v-on:click="searchPokemon" class="btn btn-primary">Search</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonService from './services/PokemonService'

@Component
export default class App extends Vue {
  private searchText: string = '';
  searchPokemon (): void {
    PokemonService.getInstance()
      .getPokemonById(this.searchText.toLowerCase())
      .then(pokemon => {
        this.$store.commit('selectPokemon', pokemon)
      })
      .then(() => {
        this.$router.push('/pokemon_info')
      })
  }
}
</script>

<style lang="less">
</style>
