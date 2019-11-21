/** * Header of app */

<template>
  <v-app-bar app>
    <v-app-bar app color="blue darken-3" dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down" to="/" link>Home</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/" link dark class="mr-2">Home</v-btn>
      <v-btn text to="/about" link dark class="mr-2">about</v-btn>

      <!-- </v-btn> -->
    </v-app-bar>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped>
.useravater {
  font-size: 1.5rem;
  text-transform: uppercase;
}
</style>
