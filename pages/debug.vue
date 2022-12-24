<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col> debug: {{ $accessor.debug.isDebug }} </v-col>
          <v-col>
            <v-btn @click="toggleDebug">Toggle Debug</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Debug",
  data() {
    return {};
  },
  methods: {
    toggleDebug() {
      this.$accessor.debug.setDebug(!this.$accessor.debug.isDebug);
    },
  },
});
</script>
