<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5">1. Break the task down into steps</div>
      </v-col>
    </v-row>
    <v-row v-for="(subTask, index) in subTasks" :key="index" align="baseline">
      <v-col cols="auto">
        <span>{{ index + 1 }}.</span>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="subTask.name"
          label="Name (Optional)"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-row align="baseline">
          <v-col cols="auto">
            <span class="mr-1">from</span>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="subTask.range[0]"
              class="mr-1"
              min="0"
              :max="subTask.range[1]"
              type="number"
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="auto">
            <span class="mr-1">to</span>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="subTask.range[1]"
              min="0"
              max="200"
              type="number"
              hide-details
              @input="updatedRangeUpper(index, $event)"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select
              v-model="subTask.unit"
              hide-details
              :items="units"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="1">
        <v-row>
          <v-btn x-small @click="insertSubTask(index)">+</v-btn>
          <v-btn x-small @click="removeSubTask(index)">X</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { SubTask } from "~/types/task";

export default Vue.extend({
  props: {
    subTasks: {
      type: Array as () => SubTask[],
      required: true,
    },
  },
  data() {
    return {
      units: [] as string[],
    };
  },
  mounted() {
    this.units = this.$constants.UNITS;
  },
  methods: {
    insertSubTask(index: number) {
      this.subTasks.splice(index + 1, 0, {
        name: "",
        range: [0, 10],
        unit: "minute(s)",
      });
    },
    removeSubTask(index: number) {
      if (this.subTasks.length > 1) {
        this.subTasks.splice(index, 1);
      }
    },
    updatedRangeUpper(index: number, event: any) {
      const temp = Number(event);
      if (this.subTasks[index].range[0] > temp) {
        this.subTasks[index].range[0] = temp;
      }
    },
  },
});
</script>
