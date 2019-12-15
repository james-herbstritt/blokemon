<template>
    <h2>Welcome Home!</h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokemonService from '../services/PokemonService'

@Component
export default class Home extends Vue { }
</script>

<style scoped lang="less"></style>
