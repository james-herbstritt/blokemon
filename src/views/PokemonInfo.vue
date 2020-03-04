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

      <h3>Abilities</h3>
      <p
        v-for="ability in $store.state.selectedPokemon.abilities"
        v-bind:key="ability.url"
      >
        {{ ability.ability.name }}
      </p>

      <h3>Base Stats</h3>
      <ul class="list-group">
        <li
          v-for="stat in $store.state.selectedPokemon.stats"
          v-bind:key="stat.stat.url"
          class="list-group-item "
        >
         {{ stat.base_stat }}
        <span class="badge">{{ stat.stat.name }}</span>
        </li>
      </ul>
    </div>

    <h3 id="move-label">Moves</h3>
    <ul id="move-list" class="list-group">
      <PokemonInfoMoveListItem
        v-for="move in $store.state.selectedPokemon.moves"
        v-bind:key="move.move.url"
        v-bind:move="move"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonInfoMoveListItem from '../components/PokemonInfoMoveListItem.vue'
import PokemonName from '../components/PokemonName.vue'

@Component({
  components: {
    PokemonInfoMoveListItem,
    PokemonName
  }
})
export default class PokemonInfo extends Vue {}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

#move-label {
  text-align: center;
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
</style>
