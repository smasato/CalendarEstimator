<template>
  <v-dialog v-model="value" max-width="70%" @click:outside="onClickOutside">
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="5">
            <v-text-field
              v-model="event.name"
              hide-details
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
import Vue from "vue";
import { Event } from "~/types/event";

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
      },
    };
  },
  methods: {
    addEvent() {
      this.event.start = new Date(this.start);
      this.event.end = new Date(this.end);

      const event: Event = {
        id: this.$accessor.event.lastEventId + 1,
        name: this.event.name,
        start: this.event.start,
        end: this.event.end,
        timed: this.event.timed,
        color:
          this.$accessor.event.colors[
            (this.$accessor.event.lastEventId + 1) %
              this.$accessor.event.colors.length
          ],
      };

      this.$accessor.event.addEvent(event);
      this.resetEvent();
      this.$emit("close-event-form");
      this.$emit("add-event");
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
