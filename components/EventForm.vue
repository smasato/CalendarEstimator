<template>
  <v-dialog v-model="dialog" width="50%" @click:outside="onClickOutside">
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
                v-model="event.start"
                type="datetime-local"
                label="Start Date"
              />
              <v-text-field
                v-model="event.duration"
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
      dialog: false,
      valid: false,
      event: {
        name: "",
        start: dayjs(this.$constants.DEFAULT_DATE)
          .startOf("day")
          .format("YYYY-MM-DDTHH:mm"),
        duration: 1,
      },
      rules: {
        required: (v: string) => !!v || "Required.",
      },
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.dialog = value;
      },
    },
  },
  methods: {
    addEvent() {
      const form = this.$refs.form as VForm;
      form.validate();

      const start = dayjs(this.event.start);
      const end = start.add(this.event.duration, "minute");
      const event: Event = {
        id: this.$accessor.event.lastEventId + 1,
        name: this.event.name,
        start: start.toDate(),
        end: end.toDate(),
        timed: true,
        fixed: false,
        type: "normal",
        color:
          this.$constants.CALENDAR_COLORS[
            (this.$accessor.event.lastEventId + 1) %
              this.$constants.CALENDAR_COLORS.length
          ],
      };

      this.$accessor.event.addEvent(event);
      this.resetEvent();
      this.$emit("close-event-form");
      this.$emit("add-event");
    },
    resetEvent() {
      this.event.name = "";
      this.event.start = dayjs(this.$constants.DEFAULT_DATE)
        .startOf("day")
        .format("YYYY-MM-DDTHH:mm");
      this.event.duration = 1;

      const form = this.$refs.form as VForm;
      form.resetValidation();
    },
    onClickOutside() {
      this.resetEvent();
      this.$emit("close-event-form");
    },
  },
});
</script>
