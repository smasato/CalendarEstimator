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
        <div ref="graph"></div>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Task } from "~/types";
import Plotly from "plotly.js";

export default Vue.extend({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  mounted() {
    this.tasks = this.$accessor.task.tasks;
    this.plotHtml();
  },
  methods: {
    calc(task: Task) {
      return this.$calc.calc(task);
    },
    plotHtml() {
      if (this.tasks.length === 0) {
        return "";
      }

      this.tasks.forEach((task, index) => {
        let data: Plotly.Data[] = [];
        data.push({
          x: this.$calc.calc(task).samples,
          type: "histogram",
        });
        const layout = {
          title: task.name,
          xaxis: {
            title: "時間",
          },
          yaxis: {
            title: "回数",
          },
        };

        if (this.$refs.graph) {
          let el = this.$refs.graph as HTMLElement;
          Plotly.newPlot(el as Plotly.Root, data, layout);
        }
      });
    },
  },
});
</script>
