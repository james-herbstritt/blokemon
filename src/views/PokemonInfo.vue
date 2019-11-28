<template>
  <div>
    <div v-if="$store.state.selectedPokemon" class="pokemon-info" id="pokemon-info">
    {{ $store.state.selectedPokemon }}
    </div>
    <button @click="getPokemon">
        get Bulbasaur
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonService from '../services/PokemonService'

@Component
export default class PokemonInfo extends Vue {
  private pokemon: string;

  getPokemon ():void {
    PokemonService.getInstance().getPokemonById('1')
      .then(pokemon => { this.$store.commit('selectPokemon', JSON.stringify(pokemon)) })
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
