<template>
  <div>
    <form role="search">
      <input type="search" id="pokemonSearch" maxlength="20" form="searchForm"
             placeholder="Pokemon Name"
             @keydown.enter="searchPokemon"
             autocomplete="on"
             required
             v-model="searchText"/>
      <button class="btn-block" @click="searchPokemon">Search</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonService from '../services/PokemonService'

@Component
export default class Home extends Vue {
  data: {
    searchText: ''
  }
  searchPokemon ():void {
    PokemonService.getInstance().getPokemonById(this.searchText)
      .then(pokemon => { this.$store.commit('selectPokemon', pokemon) })
  };

  handleKeyPress ():void {
  };
}
</script>

<style scoped lang="less"></style>
