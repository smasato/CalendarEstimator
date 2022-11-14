<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container>
        <div v-for="(task, index) in tasks">
          <v-row>
            <v-col>
              <span>{{ index }}</span>
            </v-col>
            <v-col
              ><span>{{ task.name }}</span></v-col
            >
            <v-col
              ><span>{{ task.subTasks }}</span></v-col
            >
            <v-col
              ><span>{{ task.surprises }}</span></v-col
            >
          </v-row>
        </div>
        <p>{{ zScoreJStat() }}</p>
        <p>{{ zScorStdlib() }}</p>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Task } from "~/types";
import { erfcinv } from "@stdlib/math/base/special";
import { jStat } from "jstat";

export default Vue.extend({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  mounted() {
    this.tasks = this.$accessor.task.tasks;
  },
  methods: {
    zScoreJStat() {
      const conf_level = 0.95;
      return jStat.normal.inv(0.5 + conf_level / 2, 0, 1);
    },
    zScorStdlib() {
      const conf_level = 0.95;
      return -1.41421356237309505 * 1 * erfcinv(2 * (0.5 + conf_level / 2)) + 0;
    },
  },
});
</script>
