<template>
  <v-dialog v-model="value" width="50%" @click:outside="onClickOutside">
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="event.name"
                required
                :rules="[rules.required]"
                label="Name"
              ></v-text-field>
              <v-text-field
                v-model="start"
                type="datetime-local"
                label="Start Date"
              />
              <v-text-field
                v-model="duration"
                dense
                label="Duration"
                type="number"
                min="1"
                suffix="minute(s)"
              />
              <v-btn :disabled="!valid" color="success" @click="addEvent"
                >Create Event</v-btn
              >
            </v-form>
          </v-col>
          <v-col cols="auto">
            <p>Messages</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import VForm from "vuetify/lib/components/VForm";
import { Event } from "~/types/event";

export default Vue.extend({
  props: {
    value: Boolean,
  },
  data() {
    return {
      valid: false,
      start: dayjs().startOf("day").format("YYYY-MM-DDTHH:mm"),
      duration: 1,
      event: {
        name: "",
        start: new Date(),
        end: new Date(),
      },
      rules: {
        required: (v: string) => !!v || "Required.",
      },
    };
  },
  methods: {
    addEvent() {
      const form = this.$refs.form as VForm;
      form.validate();

      this.event.start = new Date(this.start);
      this.event.end = dayjs(this.event.start)
        .add(this.duration, "minute")
        .toDate();

      const event: Event = {
        id: this.$accessor.event.lastEventId + 1,
        name: this.event.name,
        start: this.event.start,
        end: this.event.end,
        timed: true,
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
      this.duration = 1;

      this.event = {
        name: "",
        start: new Date(),
        end: new Date(),
      };
    },
    onClickOutside() {
      this.resetEvent();
      this.$emit("close-event-form");
    },
  },
});
</script>
