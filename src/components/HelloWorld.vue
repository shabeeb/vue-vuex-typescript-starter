<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <h1>Hello World</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Helloworld extends Vue {}
</script>
