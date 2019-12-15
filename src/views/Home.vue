<template>
  <div>
    <form autocomplete="on" id="searchForm">
      <label for="pokemonSearch">Search for a Pokemon: </label>
      <input type="search" id="pokemonSearch" maxlength="20" form="searchForm"
             placeholder="Pokemon Name"/>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style scoped lang="less"></style>
