<template>
  <div class="container container-fluid">
    <div
      v-if="$store.state.selectedPokemon"
      class="pokemon-info"
      id="pokemon-info"
    >
      <img
        id="pokemon-image"
        v-bind:src="$store.state.selectedPokemon.sprites.front_default"
        alt="Image
       not found"
      />
      <PokemonName
        id="pokemon-name"
        v-bind:name="$store.state.selectedPokemon.name"
      />

      <div id="type-ability" class="row">
        <div class="col-6 text-center">
          <h3>Type</h3>
          <div v-if="$store.state.selectedPokemon.types.length === 1">
            <p>
              {{ $store.state.selectedPokemon.types[0].type.name }}
            </p>
          </div>
          <div v-if="$store.state.selectedPokemon.types.length === 2">
            <p>
              {{ $store.state.selectedPokemon.types[0].type.name }} |
              {{ $store.state.selectedPokemon.types[1].type.name }}
            </p>
          </div>
        </div>

        <div class="col-6 text-center">
          <h3>Abilities</h3>
          <p
            v-for="ability in $store.state.selectedPokemon.abilities"
            v-bind:key="ability.url"
          >
            {{ ability.ability.name }}
          </p>
        </div>
      </div>
      <div class="col-8 center-block">
        <h3>Base Stats</h3>
        <PokemonBaseStatsList
          id="pokmon-base-stats"
          v-bind:stats="$store.state.selectedPokemon.stats"
        />
      </div>
    </div>

    <h3 id="move-label" class="col-8">Moves</h3>
    <ul id="move-list" class="list-group">
      <PokemonInfoMoveListItem
        v-for="move in sortedMoveList"
        v-bind:key="move.move.url"
        v-bind:move="move"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonInfoMoveListItem from '../components/PokemonInfoMoveListItem.vue'
import PokemonBaseStatsList from '../components/PokemonBaseStatsList.vue'
import PokemonName from '../components/PokemonName.vue'

@Component({
  components: {
    PokemonInfoMoveListItem,
    PokemonName,
    PokemonBaseStatsList
  },
  computed: {
    sortedMoveList (): Array<object> {
      return this.$store.state.selectedPokemon.moves.sort(
        (m1, m2) => m1.move.name > m2.move.name
      )
    }
  }
})
export default class PokemonInfo extends Vue {}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

#move-label {
  text-align: left;
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

#move-list {
  margin: auto;
}

#pokemon-name {
  text-align: center;
}

#pokemon-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  height: auto;
}

.center-block {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
