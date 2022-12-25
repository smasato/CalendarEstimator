<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col> debug: {{ $accessor.debug.isDebug }}</v-col>
          <v-col>
            <v-btn @click="toggleDebug">Toggle Debug</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="$accessor.resetState()">Reset</v-btn>
          </v-col>
          <v-col>
            <v-form ref="form">
              <v-file-input
                v-model="json"
                label="Experiment File"
                accept=".json"
              ></v-file-input>
              <v-btn color="success" @click="loadJson">
                Load Experiment File
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Task } from "~/types/task";

export default Vue.extend({
  name: "Debug",
  data() {
    return {
      json: null as File | null,
    };
  },
  methods: {
    toggleDebug() {
      this.$accessor.debug.setDebug(!this.$accessor.debug.isDebug);
    },
    loadJson() {
      if (this.json) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const json = e.target?.result;
          if (json) {
            const data = JSON.parse(json as string);
            const tasks = data.tasks;
            const events = data.events;

            this.$accessor.resetState();

            this.$accessor.task.setTasks(tasks as Task[]);
            this.$accessor.event.setEvents(events);
          }
        };
        reader.readAsText(this.json);
      }
    },
  },
});
</script>
