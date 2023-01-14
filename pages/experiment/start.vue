<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>Start</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="start">Start</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import { Event } from "~/types/event";
import { Task } from "~/types/task";

export default Vue.extend({
  name: "Start",
  head() {
    return {
      title: "Experiment Start",
    };
  },
  methods: {
    start() {
      this.$accessor.task.resetTasks();
      this.$accessor.event.resetEvents();

      const start = dayjs(
        this.$constants.DEFAULT_DATE + " 18:00",
        "YYYY-MM-DD HH:mm"
      ).toDate();
      const end = dayjs(start).add(30, "minutes").toDate();

      const eventC: Event = {
        name: "タスク C",
        start,
        end,
        id: 0,
        timed: true,
        fixed: false,
        color: "green",
        type: "normal",
      };
      this.$accessor.event.addEvent(eventC);

      const taskC: Task = {
        name: "タスク C",
        start,
        end,
        id: 0,
        timed: true,
        fixed: false,
        subTasks: [],
        surprises: [],
        color: "green",
        type: "normal",
      };
      this.$accessor.task.addTask(taskC);

      this.$router.push("/experiment/normal");
    },
  },
});
</script>
