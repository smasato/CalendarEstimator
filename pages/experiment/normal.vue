<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>Normal</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="$router.push('/experiment/visualization')"
              >Visualization</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
export default {
  name: "Normal",
  head() {
    return {
      title: "Experiment (Normal)",
    };
  },
};
</script>
