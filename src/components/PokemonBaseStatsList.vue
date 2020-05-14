<template>
  <ul class="list-group" v-bind:theseStats="theseStats">
    <PokemonBaseStatsListItem v-bind:stat="theseStats.hp" />
    <PokemonBaseStatsListItem v-bind:stat="theseStats.attack" />
    <PokemonBaseStatsListItem v-bind:stat="theseStats.defense" />
    <PokemonBaseStatsListItem v-bind:stat="theseStats.specialAttack" />
    <PokemonBaseStatsListItem v-bind:stat="theseStats.specialDefense" />
    <PokemonBaseStatsListItem v-bind:stat="theseStats.speed" />
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonBaseStatsListItem from './PokemonBaseStatsListItem.vue'

@Component({
  computed: {
    theseStats (): object {
      const rv: object = {
        hp: this.getStatByName('hp'),
        attack: this.getStatByName('attack'),
        defense: this.getStatByName('defense'),
        specialAttack: this.getStatByName('special-attack'),
        specialDefense: this.getStatByName('special-defense'),
        speed: this.getStatByName('speed')
      }
      return rv
    }
  },
  components: {
    PokemonBaseStatsListItem
  }
})
export default class PokemonBaseStatsList extends Vue {
  @Prop() stats: Array<object>

  getStatByName (name): object {
    return this.stats.filter(s => s.stat.name === name)[0]
  }
}
</script>

<style scoped lang="less"></style>
