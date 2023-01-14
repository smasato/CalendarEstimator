<template>
  <v-dialog v-model="dialog" max-width="70%" :persistent="true">
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="task.name"
              hide-details
              label="Name"
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <SubTaskContainer
            :sub-tasks="task.subTasks"
            @update:subTasks="task.subTasks = $event"
          />
        </v-row>
        <v-row>
          <SurprisesContainer
            :surprises="task.surprises"
            @update:surprises="task.surprises = $event"
          />
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="addTask">OK</v-btn>
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
    taskId: {
      type: Number,
      required: false,
      default: -1,
    },
  },
  data() {
    return {
      dialog: false,
      task: {
        id: null,
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
        switch (this.taskId) {
          case 1:
            this.setTask("A");
            break;
          case 2:
            this.setTask("B");
            break;
        }
      },
    },
  },
  methods: {
    addTask() {
      // return if the task is not valid
      if (this.task.surprises.some((s) => s.probability[1] === 0)) {
        return;
      }

      const task = this.task;
      const estimate = this.$estimate.estimate(task);

      const start = dayjs(
        this.$constants.DEFAULT_DATE + " 09:00",
        "YYYY-MM-DD HH:mm"
      );
      const end = dayjs(start).add(estimate.max, "minute");
      task.start = start.toDate();
      task.end = end.toDate();

      if (task.id === null) {
        task.id = this.$accessor.task.lastTaskId + 1;
      }

      task.timed = true;

      if (task.color === undefined) {
        task.color = "blue";
      }
      if (task.fixed === undefined) {
        task.fixed = false;
      }
      if (task.type === undefined) {
        task.type = "task";
      }

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
    setTask(taskId: string) {
      switch (taskId) {
        case "A":
          this.task = JSON.parse(JSON.stringify(this.$constants.TASK_A));
          break;
        case "B":
          this.task = JSON.parse(JSON.stringify(this.$constants.TASK_B));
          break;
      }
    },
  },
});
</script>
