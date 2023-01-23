<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-file-input
            v-model="files"
            accept=".json"
            prepend-icon="mdi-upload"
            multiple
            label="ファイルを選択"
            show-size
            draggable="true"
            @change="loadFiles"
          ></v-file-input>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AnalysisLoad",
  data() {
    return {
      files: [] as File[],
    };
  },
  methods: {
    loadFiles() {
      this.files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          // @ts-ignore
          const text = e.target.result as string;
          const participant = JSON.parse(text);

          participant.tasks.forEach((task) => {
            task.start = new Date(task.start);
            task.end = new Date(task.end);
          });
          participant.events.forEach((event) => {
            event.start = new Date(event.start);
            event.end = new Date(event.end);
          });

          this.$accessor.participants.addParticipant(participant);
        };
        reader.readAsText(file);
      });
    },
  },
});
</script>
