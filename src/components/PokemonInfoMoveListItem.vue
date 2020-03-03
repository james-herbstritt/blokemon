<template>
  <li v-bind:id="id" class="list-group-item">
    {{ move.move.name }}
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  computed: {
    id (): string {
      // TODO:: maybe use key here?
      return 'move-list-item-' + this.move.move.name
    }
  }
})
export default class PokemonInfoMoveListItem extends Vue {
  @Prop() move: object
  @Prop() key: string
}
</script>

<style scoped lang="less"></style>
