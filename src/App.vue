<template>
  <v-app>
    <Header />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header';

@Component({
  components: {
    Header
  }
})
// App goes here
export default class App extends Vue {}
</script>
