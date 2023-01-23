<template>
  <v-app-bar app>
    <v-toolbar-title @click="$router.push('/')"
      >Calendar Estimator</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <div v-if="$accessor.debug.isDebug">
      <v-btn depressed @click="$router.push('/tasks')">Tasks</v-btn>
      <v-btn depressed @click="$router.push('/events')">Events</v-btn>
      <v-btn depressed @click="$router.push('/debug')">Debug</v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {};
  },
});
</script>
