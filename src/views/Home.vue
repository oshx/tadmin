<template>
  <div :class="$style.home">
    <h1>TADMIN</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>

<style module lang="scss">
* {
  font-family: noto sans korean, sans-serif;
}

.home {
  display: block;
}
</style>
