<template>
  <v-app-bar app>
    <v-toolbar-title @click="$router.push('/')"
      >Calendar Estimator</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn depressed to="/tasks/"> Tasks </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {},
});
</script>
