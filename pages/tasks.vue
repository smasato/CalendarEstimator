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
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  mounted() {
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
      this.tasks = this.$accessor.task.tasks;
    },
  },
});
</script>
