<template>
  <div>
    <div v-if="$store.state.selectedPokemon" class="pokemon-info" id="pokemon-info">
       <img v-bind:src="$store.state.selectedPokemon.sprites.front_default" alt="Image
       not found">

       <div v-if="$store.state.selectedPokemon.types.length === 1">
         <h3> Type </h3>
         <p>
           {{ $store.state.selectedPokemon.types[0].type.name }}
         </p>
       </div>
       <div v-if="$store.state.selectedPokemon.types.length === 2">
         <h3> Types </h3>
         <p>
           {{ $store.state.selectedPokemon.types[0].type.name }} |
            {{ $store.state.selectedPokemon.types[1].type.name }}
         </p>
       </div>

       <h2> {{ $store.state.selectedPokemon.name }} </h2>
       <h3> Abilities </h3>
       <p v-for="ability in $store.state.selectedPokemon.abilities"
          v-bind:key="ability.url">
         {{ ability.ability.name }}
       </p>

       <h3> Moves </h3>
       <p v-for="move in $store.state.selectedPokemon.moves"
          v-bind:key="move.url">
         {{ move.move.name }}
       </p>

       <h3> Base Stats </h3>
       <p v-for="stat in $store.state.selectedPokemon.stats"
          v-bind:key="stat.stat.url">
               {{ stat.stat.name }}: {{stat.base_stat}}
       </p>
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
      .then(pokemon => { this.$store.commit('selectPokemon', pokemon) })
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
