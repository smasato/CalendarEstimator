<template>
  <v-container>
    <v-row>
      <div class="text-h5">1. Break the task down into steps</div>
    </v-row>
    <div v-for="(subTask, index) in subTasks">
      <v-row align="center">
        <span>{{ index + 1 }}.</span>
        <v-col cols="4">
          <v-text-field
            v-model="subTask.name"
            label="Name (Optional)"
          ></v-text-field>
        </v-col>

        <v-col cols="4">
          <v-row>
            <v-range-slider
              hide-details
              v-model="subTask.range"
            ></v-range-slider>
          </v-row>
          <v-row>
            <span
              >from {{ subTask.range[0] }} to {{ subTask.range[1] }}
              {{ subTask.unit }}</span
            >
          </v-row>
        </v-col>

        <v-col cols="2">
          <v-select v-model="subTask.unit" :items="units"></v-select>
        </v-col>

        <v-col cols="1">
          <v-row>
            <v-btn x-small @click="insertSubTask(index)">+</v-btn>
            <v-btn x-small @click="removeSubTask(index)">X</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      subTasks: [
        {
          name: "",
          range: [0, 10],
          unit: "minute(s)",
        },
      ],
      units: [],
    };
  },
  methods: {
    insertSubTask(index) {
      this.subTasks.splice(index + 1, 0, {
        name: "",
        range: [0, 10],
        unit: "minute(s)",
      });
    },
    removeSubTask(index) {
      if (this.subTasks.length > 1) {
        this.subTasks.splice(index, 1);
      }
    },
  },
  mounted() {
    // @ts-ignore
    this.units = this.$constants.units;
  },
});
</script>
