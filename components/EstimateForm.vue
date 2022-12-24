<template>
  <v-dialog v-model="dialog" max-width="70%" @click:outside="onClickOutside">
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-btn @click="setExample1">Example 1</v-btn>
          </v-col>
          <v-col>
            <v-btn @click="resetTask">Try if yourself</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="task.name"
              hide-details
              label="Name (Optional)"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <SubTaskContainer :sub-tasks="task.subTasks" />
        </v-row>
        <v-row>
          <SurprisesContainer :surprises="task.surprises" />
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="addTask">Create Task</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import { Task } from "~/types/task";
import SubTaskContainer from "~/components/SubTaskContainer.vue";
import SurprisesContainer from "~/components/SurprisesContainer.vue";

export default Vue.extend({
  components: {
    SubTaskContainer,
    SurprisesContainer,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      dialog: false,
      task: {
        name: "",
        subTasks: [
          {
            name: "",
            range: [0, 10],
            unit: "minute(s)",
          },
        ],
        surprises: [
          {
            name: "",
            range: [0, 10],
            unit: "minute(s)",
            eventType: "slower",
            probability: [0, 1],
          },
        ],
      } as Task,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.dialog = value;
      },
    },
  },
  methods: {
    addTask() {
      const task = this.task;
      const estimate = this.$estimate.estimate(task);

      const start = dayjs(this.$constants.DEFAULT_DATE).startOf("day");
      const end = dayjs(start).add(estimate.max, "minute");
      task.id = this.$accessor.task.lastTaskId + 1;
      task.start = start.toDate();
      task.end = end.toDate();
      task.timed = true;
      task.color = "blue";

      this.$accessor.task.addTask(task);
      this.resetTask();
      this.$emit("close-dialog");
    },
    resetTask() {
      this.task = {
        name: "",
        subTasks: [
          {
            name: "",
            range: [0, 10],
            unit: "minute(s)",
          },
        ],
        surprises: [
          {
            name: "",
            range: [0, 10],
            unit: "minute(s)",
            eventType: "slower",
            probability: [0, 1],
          },
        ],
      } as Task;
    },
    setExample1() {
      this.task = JSON.parse(JSON.stringify(this.$constants.EXAMPLE_1));
    },
    onClickOutside() {
      this.resetTask();
      this.$emit("close-dialog");
    },
  },
});
</script>
