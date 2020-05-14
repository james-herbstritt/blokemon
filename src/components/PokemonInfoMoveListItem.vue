<template>
  <a v-bind:id="id" class="list-group-item" href="#">{{ move.move.name }}</a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  computed: {
    id (): string {
      return 'move-list-item-' + this.move.move.name
    }
  }
})
export default class PokemonInfoMoveListItem extends Vue {
  @Prop() move: object
}
</script>

<style scoped lang="less">
.list-group-item {
  text-align: center;
}
</style>
