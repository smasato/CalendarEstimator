<template>
  <v-dialog v-model="value" max-width="70%" v-on:click:outside="onClickOutside">
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="5">
            <v-text-field
              hide-details
              v-model="event.name"
              label="Name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              v-model="start"
              type="datetime-local"
              label="Start Date"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              v-model="end"
              type="datetime-local"
              label="End Date"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="addEvent">Create Event</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Event } from "~/types";
import Vue from "vue";

export default Vue.extend({
  props: {
    value: Boolean,
  },
  data() {
    return {
      start: "",
      end: "",
      event: {
        name: "",
        start: new Date(),
        end: new Date(),
        timed: true,
      } as Event,
    };
  },
  methods: {
    addEvent() {
      this.event.start = new Date(this.start);
      this.event.end = new Date(this.end);
      this.$accessor.event.addEvent(this.event);
      this.resetEvent();
      this.$emit("close-event-form");
    },
    resetEvent() {
      this.start = "";
      this.end = "";

      this.event = {
        name: "",
        start: new Date(),
        end: new Date(),
        timed: true,
      };
    },
    onClickOutside() {
      this.resetEvent();
      this.$emit("close-event-form");
    },
  },
});
</script>
