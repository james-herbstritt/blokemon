<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark" id="nav">
      <div class="container">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <router-link class="nav-item" to="/pokemon_info"
          >PokemonInfo</router-link>
        <form class="form-inline" role="search">
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
          <button class="btn btn-primary">Search</button>
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
  private searchText : string = '';
  searchPokemon (): void {
    PokemonService.getInstance()
      .getPokemonById(this.searchText.toLowerCase())
      .then(pokemon => {
        this.$store.commit('selectPokemon', pokemon)
      })
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
