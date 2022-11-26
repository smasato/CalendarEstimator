<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container>
        <div v-for="(task, index) in tasks">
          <v-row>
            <v-col>
              <span>{{ index }}</span>
            </v-col>
            <v-col
              ><span>{{ task.name }}</span></v-col
            >
            <v-col
              ><span>{{ task.subTasks }}</span></v-col
            >
            <v-col
              ><span>{{ task.surprises }}</span></v-col
            >
            <v-col
              ><span>{{ calc(task) }}</span></v-col
            >
          </v-row>
        </div>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Task } from "~/types";

export default Vue.extend({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  mounted() {
    this.tasks = this.$accessor.task.tasks;
  },
  methods: {
    calc(task: Task) {
      const result = this.$calc.calc(task);
      return this.$calc.prepareSample(result.samples);
    },
  },
});
</script>
