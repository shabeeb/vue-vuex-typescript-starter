<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <h1>Hello World</h1>
        <div>
          Genrate your full components online
          <a
            href="https://shabeeb.github.io/vue-typescript-code-generator/"
            target="_vue-typescript-code-generator"
            >vue-typescript-code-generator</a
          >
          or fork my generator
          <a
            href="https://github.com/shabeeb/vue-typescript-code-generator"
            target="_vue-typescript-code-generator"
            >fork my generator</a
          >
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Helloworld extends Vue {}
</script>
