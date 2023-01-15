<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>Task: {{ $accessor.task.tasks.length }}</v-col>
          <v-col>Events: {{ $accessor.event.events.length }}</v-col>
          <v-col>Logs: {{ $accessor.log.logs.length }}</v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="experiment.id"
                dense
                label="ID"
                type="number"
              />
              <v-text-field
                v-model="experiment.name"
                required
                :rules="[rules.required]"
                label="Name"
              ></v-text-field>
              <v-text-field
                v-model="experiment.date"
                type="date"
                label="Experiment Date"
              />
              <v-btn :disabled="!valid" color="success" @click="download"
                >Download</v-btn
              >
              <v-btn color="error" @click="resetExperiment"
                >Reset Experiment</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import VForm from "vuetify/lib/components/VForm";

type Experiment = {
  id: string;
  name: string;
  date: string;
};
type DataType = {
  valid: boolean;
  experiment: Experiment;
  rules: object;
};
export default Vue.extend({
  name: "Experiment",
  data(): DataType {
    return {
      valid: false,
      experiment: {
        id: "",
        name: "",
        date: dayjs().startOf("day").format("YYYY-MM-DD"),
      },
      rules: {
        required: (v: string) => !!v || "Required.",
      },
    };
  },
  methods: {
    download() {
      const events = this.$accessor.event.events;
      const tasks = this.$accessor.task.tasks;
      const logs = this.$accessor.log.logs;

      if (events.length === 0 || tasks.length === 0) {
        return;
      }

      const form = this.$refs.form as VForm;
      form.validate();

      const data = {
        experiment: this.experiment,
        events,
        tasks,
        logs,
      };
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const date = dayjs(this.experiment.date).format("YYYY-MM-DD");
      const id = String(Number(this.experiment.id)).padStart(2, "0");
      link.setAttribute(
        "download",
        `${id}_${this.experiment.name}_${date}.json`
      );
      link.setAttribute("href", url);
      link.click();
      link.remove();
    },
    resetExperiment() {
      this.experiment = {
        id: String(Number(this.experiment.id) + 1),
        name: "",
        date: dayjs().startOf("day").format("YYYY-MM-DD"),
      };

      this.$accessor.resetState();

      this.$router.push("/experiment/start");
    },
  },
});
</script>
