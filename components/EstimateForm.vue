<template>
  <v-dialog v-model="isOpen" max-width="70%">
    <v-card>
      <v-text-field v-model="task.name" label="Name (Optional)"></v-text-field>
      <SubTaskContainer v-bind:subTasks="task.subTasks" />
      <SurprisesContainer v-bind:suprises="task.surprises" />
      <v-btn @click="addTask">Create Task</v-btn>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { Task, SubTask, Surprise } from "~/types";

export default Vue.extend({
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
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
      this.$emit("update:isOpen", false);
    },
  },
});
</script>
