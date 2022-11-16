<template>
  <v-app>
    <Header />

    <v-main>
      <v-container fluid>
        <EstimateForm
          v-model="estimateForm"
          v-on:close-dialog="estimateForm = false"
        />
        <EventForm
          v-model="eventForm"
          v-on:close-event-form="eventForm = false"
        />
        <v-row class="fill-height">
          <v-col cols="3">
            <v-row>
              <v-col align="center">
                <v-btn-toggle v-model="mode">
                  <v-btn value="normal"> Normal </v-btn>
                  <v-btn value="estimate"> Estimate </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <div @click="clickCreate">
                  <v-btn x-large rounded>
                    作成 <v-icon small>mdi-chevron-down</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-sheet height="64">
              <v-toolbar flat>
                <v-btn
                  outlined
                  class="mr-4"
                  color="grey darken-2"
                  @click="setToday"
                  >今日</v-btn
                >
                <v-btn fab text small color="grey darken-2" @click="prev">
                  <v-icon small>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab text small color="grey darken-2" @click="next">
                  <v-icon small>mdi-chevron-right</v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">{{
                  // @ts-ignore
                  $refs.calendar.title
                }}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
              <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                type="week"
                :events="events"
                :event-color="getEventColor"
                @change="fetchEvents"
              ></v-calendar>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Event } from "~/types";

export default Vue.extend({
  data: () => ({
    estimateForm: false,
    eventForm: false,
    mode: "normal",
    focus: "",
    events: [] as Event[],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),

  mounted() {
    // @ts-ignore
    this.$refs.calendar.checkChange();
  },
  methods: {
    clickCreate() {
      if (this.mode === "normal") {
        this.eventForm = true;
      } else {
        this.estimateForm = true;
      }
    },
    getEventColor(event: Event) {
      if (event.color === undefined) {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
      } else {
        return event.color;
      }
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      // @ts-ignore
      this.$refs.calendar.prev();
    },
    next() {
      // @ts-ignore
      this.$refs.calendar.next();
    },
    // @ts-ignore
    fetchEvents({ start, end }) {
      const events = this.$accessor.event.events;
      this.events = events;
    },
  },
});
</script>
