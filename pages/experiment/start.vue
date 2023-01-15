<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>実験開始</h1>
            <p>このページでは、この実験の説明を行います。</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              この実験では、通常のカレンダー表示・提案手法のカレンダー表示（予測的可視化）でのスケジューリングを行います。<br />
              各カレンダー表示でふたつのタスクをスケジューリングしてください。
            </p>
            <p>操作方法と表示内容については、それぞれのページで説明します。</p>
            <p>
              説明を読んだら、「次へ」をクリックして実験を開始してください。
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="start">次へ</v-btn>
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
        `${this.$constants.DEFAULT_DATE} 18:00`,
        "YYYY-MM-DD HH:mm"
      ).toDate();
      const end = dayjs(start).add(30, "minutes").toDate();

      const eventC: Event = {
        name: "タスクC",
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
        ...eventC,
        id: 0,
        subTasks: [],
        surprises: [],
      };
      this.$accessor.task.addTask(taskC);

      this.$router.push("/experiment/normal");
    },
  },
});
</script>
