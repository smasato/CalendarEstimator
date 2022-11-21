<template>
  <v-dialog v-model="value" max-width="70%" v-on:click:outside="onClickOutside">
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
              hide-details
              v-model="task.name"
              label="Name (Optional)"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <SubTaskContainer v-bind:subTasks="task.subTasks" />
        </v-row>
        <v-row>
          <SurprisesContainer v-bind:suprises="task.surprises" />
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
import { Task, SubTask, Surprise } from "~/types";
import Vue from "vue";

export default Vue.extend({
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
        ] as SubTask[],
        surprises: [
          {
            name: "",
            range: [0, 10],
            unit: "minute(s)",
            eventType: "slower",
            probability: [0, 1],
          },
        ] as Surprise[],
      } as Task,
    };
  },
  methods: {
    addTask() {
      this.$accessor.task.addTask(this.task);
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
        ] as SubTask[],
        surprises: [
          {
            name: "",
            range: [0, 10],
            unit: "minute(s)",
            eventType: "slower",
            probability: [0, 1],
          },
        ] as Surprise[],
      } as Task;
    },
    setExample1() {
      let task = Object.create(this.$constants.example1());
      this.task = task;
    },
    onClickOutside() {
      this.resetTask();
      this.$emit("close-dialog");
    },
  },
});
</script>
