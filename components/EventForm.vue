<template>
  <v-dialog v-model="dialog" width="70%" @click:outside="onClickOutside">
    <v-card>
      <v-container v-if="task">
        <v-row>
          <v-col>
            <v-container>
              <v-row>
                <SubTaskContainer
                  :sub-tasks="task.subTasks"
                  :read-only="true"
                />
              </v-row>
              <v-row>
                <SurprisesContainer
                  :surprises="task.surprises"
                  :read-only="true"
                />
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-container>
              <VForm ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="event.name"
                  required
                  disabled
                  :rules="[rules.required]"
                  label="タスク名"
                ></v-text-field>
                <v-text-field
                  v-model="event.start"
                  type="time"
                  label="開始時刻"
                />
                <v-text-field
                  v-model="event.duration"
                  dense
                  label="所要時間"
                  type="number"
                  min="1"
                  suffix="分"
                />
                <v-btn :disabled="!valid" color="success" @click="addEvent"
                  >Create Event</v-btn
                >
              </VForm>
            </v-container>
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
import { Task } from "~/types/task";
import SubTaskContainer from "~/components/SubTaskContainer.vue";
import SurprisesContainer from "~/components/SurprisesContainer.vue";
export default Vue.extend({
  components: {
    VForm,
    SubTaskContainer,
    SurprisesContainer,
  },
  props: {
    value: Boolean,
    eventId: String,
  },
  data() {
    return {
      dialog: false,
      valid: false,
      task: null as Task | null,
      event: {
        name: "",
        start: "00:00",
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
        if (this.eventId) {
          const task = this.$accessor.task.tasks.find(
            (task) => task.name === `Task ${this.eventId}`
          );
          if (task) {
            this.task = task;
            this.event.name = task.name;
          }
        }
      },
    },
  },
  methods: {
    addEvent() {
      const form = this.$refs.form as VForm;
      form.validate();

      const start = dayjs(
        `${this.$constants.DEFAULT_DATE} ${this.event.start}`,
        "YYYY-MM-DD HH:mm"
      );
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
      this.event.start = "00:00";
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
