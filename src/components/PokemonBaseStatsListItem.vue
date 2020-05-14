<template>
  <li class="list-group-item">
    <span class="badge">{{ stat.stat.name }}</span>
    {{ stat.base_stat }}
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class PokemonBaseStat extends Vue {
  @Prop() stat: object
}
</script>

<style scoped lang="less"></style>
