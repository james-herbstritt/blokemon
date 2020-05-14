<template>
  <ul class="list-group" v-bind:theseStats="theseStats">
    <PokemonBaseStat v-bind:stat="theseStats.hp" />
    <PokemonBaseStat v-bind:stat="theseStats.attack" />
    <PokemonBaseStat v-bind:stat="theseStats.defense" />
    <PokemonBaseStat v-bind:stat="theseStats.specialAttack" />
    <PokemonBaseStat v-bind:stat="theseStats.specialDefense" />
    <PokemonBaseStat v-bind:stat="theseStats.speed" />
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonBaseStat from './PokemonBaseStat.vue'

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
    PokemonBaseStat
  }
})
export default class PokemonBaseStats extends Vue {
  @Prop() stats: Array<object>

  getStatByName (name): object {
    return this.stats.filter(s => s.stat.name === name)[0]
  }
}
</script>

<style scoped lang="less"></style>
