<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5">1. タスクをサブタスクに分解する</div>
        <p>
          まず、タスクをサブタスクに分解します。タスクをサブタスクに分解することで、タスクの所要時間を見積もりやすくなります。
        </p>
        <p v-if="!readOnly">
          ここではあらかじめ入力されたそれぞれサブタスクについて、所要時間の範囲を入力してください。
        </p>
      </v-col>
    </v-row>
    <v-row
      v-for="(subTask, index) in localSubTasks"
      :key="index"
      align="baseline"
    >
      <v-col cols="auto">
        <span>{{ index + 1 }}.</span>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="subTask.name"
          label="サブタスク名"
          disabled
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-row align="baseline">
          <v-col cols="2">
            <v-text-field
              v-model.number="subTask.range[0]"
              class="mr-1"
              min="0"
              :max="subTask.range[1]"
              type="number"
              label="最短"
              hint="0以上の整数を入力"
              :readonly="readOnly"
            ></v-text-field>
          </v-col>
          <v-col cols="auto">
            <span class="mr-1">から</span>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="subTask.range[1]"
              min="0"
              max="200"
              label="最長"
              hint="最短時間以上の整数を入力"
              type="number"
              :readonly="readOnly"
              @blur="updatedRangeUpper(index)"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select
              v-model="subTask.unit"
              hide-details
              disabled
              :items="units"
            ></v-select>
          </v-col>
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
    readOnly: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      localSubTasks: this.subTasks,
    };
  },
  computed: {
    units() {
      return this.$constants.UNITS;
    },
  },
  watch: {
    localSubTasks: {
      handler() {
        this.$emit("update:subTasks", this.localSubTasks);
      },
      deep: true,
    },
    subTasks: {
      handler() {
        this.localSubTasks = this.subTasks;
      },
      deep: true,
    },
  },
  methods: {
    updatedRangeUpper(index: number) {
      if (
        this.localSubTasks[index].range[0] > this.localSubTasks[index].range[1]
      ) {
        this.localSubTasks[index].range = [
          this.localSubTasks[index].range[1],
          this.localSubTasks[index].range[0],
        ];
      }
    },
  },
});
</script>
