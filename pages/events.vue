<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-btn @click="resetEvents">Reset Events</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>index</v-col>
          <v-col>id</v-col>
          <v-col>name</v-col>
          <v-col>start</v-col>
          <v-col>end</v-col>
        </v-row>
        <div v-for="(event, index) in events" :key="event.id">
          <v-row>
            <v-col>
              <span>{{ index }}</span>
            </v-col>
            <v-col
              ><span>{{ event.id }}</span></v-col
            >
            <v-col
              ><span>{{ event.name }}</span></v-col
            >
            <v-col
              ><span>{{ event.start }}</span></v-col
            >
            <v-col
              ><span>{{ event.end }}</span></v-col
            >
          </v-row>
        </div>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Event } from "~/types/event";

export default Vue.extend({
  name: "Events",
  data() {
    return {
      events: [] as Event[],
    };
  },
  mounted() {
    this.events = this.$accessor.event.events;
    this.$store.watch(
      (state) => state.event.events,
      (events) => {
        this.events = events;
      }
    );
  },
  methods: {
    resetEvents() {
      this.$accessor.event.resetEvents();
    },
  },
});
</script>
