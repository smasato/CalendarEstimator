<template>
  <v-dialog v-model="value" max-width="70%" @click:outside="onClickOutside">
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
  methods: {
    addTask() {
      const task = this.task;
      const estimate = this.$estimate.estimate(task);
      task.id = this.$accessor.task.lastTaskId + 1;
      task.start = new Date();
      task.end = new Date(task.start.getTime() + estimate.max * 60 * 1000);
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
