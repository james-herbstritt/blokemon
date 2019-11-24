<template>
  <div class="pokemon-info" id="pokemon-info">
    {{ data.pokemon }}
    <button v-on:click='getAllPokemon'>
      Get All Pokemon
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { PokemonService } from '../services/PokemonService'

@Component
export default class PokemonInfo extends Vue {
  @Prop() private data!: {
    pokemon: string
   } = { pokemon: 'Default Pokemon' }

  getAllPokemon ():void {
    PokemonService.getInstance().getPokemon()
      .then(pokemon => { this.data.pokemon = JSON.stringify(pokemon) })
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
