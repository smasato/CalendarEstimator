<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-btn @click="resetTasks">Reset Tasks</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>index</v-col>
          <v-col>name</v-col>
          <v-col>subTasks</v-col>
          <v-col>surprises</v-col>
          <v-col>histogram</v-col>
        </v-row>
        <div v-for="(task, index) in tasks" :key="index">
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
import { Task } from "~/types/task";

export default Vue.extend({
  name: "Tasks",
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  mounted() {
    this.tasks = this.$accessor.task.tasks;
    this.$store.watch(
      (state) => state.task.tasks,
      (tasks) => {
        this.tasks = tasks;
      }
    );
  },
  methods: {
    calc(task: Task) {
      const result = this.$estimate.estimate(task);
      return result.histogram;
    },
    resetTasks() {
      this.$accessor.task.resetTasks();
    },
  },
});
</script>
