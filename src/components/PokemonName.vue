<template>
  <h2 id="pokemon-name">
    {{ name[0].toUpperCase() + name.slice(1) }}
  </h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PokemonInfoMoveListItem extends Vue {
  @Prop() name: string
}
</script>

<style lang="less">
h2 {
  border: black;
}
</style>
