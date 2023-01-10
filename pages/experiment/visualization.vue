<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>Visualization</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="$router.push('/experiment/end')">End</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
export default {
  name: "Visualization",
  head() {
    return {
      title: "Experiment (Visualization)",
    };
  },
};
</script>
