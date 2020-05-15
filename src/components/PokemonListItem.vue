<template>
  <li class="pokemon-list-item" id="pokemon-list-item">
    <div>
      {{ data.pokemon.name }}
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonService from '../services/PokemonService'

@Component
export default class PokemonListItem extends Vue {
//  @Prop private data: {
//    pokemon: string
//  } = { pokemon: this.getPokemon() }
//
//  getPokemon (): void {
//    PokemonService.getInstance()
//      .getPokemonById('1')
//      .then(pokemon => {
//        this.data.pokemon = JSON.stringify(pokemon)
//      })
//  }
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
