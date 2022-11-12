<template>
  <v-container>
    <v-row>
      <div class="text-h5">1. Break the task down into steps</div>
    </v-row>
    <div v-for="(subTask, index) in subTasks">
      <v-row align="center">
        <v-text>{{ index + 1 }}.</v-text>
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
            <v-text
              >from {{ subTask.range[0] }} to {{ subTask.range[1] }}
              {{ subTask.unit }}</v-text
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

<script>
export default {
  data() {
    return {
      subTasks: [
        {
          name: "",
          range: [0, 10],
          unit: "minute(s)",
        },
      ],
      units: ["minute(s)", "hour(s)", "day(s)"],
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
};
</script>
