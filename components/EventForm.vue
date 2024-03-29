<template>
  <v-dialog v-model="dialog" width="70%" :persistent="true">
    <v-card>
      <v-container v-if="task">
        <v-row>
          <v-col cols="12">
            <p>次のタスクについての所要時間を見積もります。</p>
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
                  v-model.number="event.duration"
                  dense
                  label="所要時間"
                  type="number"
                  min="1"
                  suffix="分"
                />
                <v-btn :disabled="!valid" color="success" @click="addEvent"
                  >OK</v-btn
                >
              </VForm>
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              以下にさきほどの入力が表示されています。これをもとに所要時間を入力してください。
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="task.name"
                    hide-details
                    label="タスク名"
                    disabled
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p>{{ task.explanation }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <SubTaskContainer
                    :sub-tasks="task.subTasks"
                    :read-only="true"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <SurprisesContainer
                    :surprises="task.surprises"
                    :read-only="true"
                  />
                </v-col>
              </v-row>
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
    eventId: Number,
  },
  data() {
    return {
      dialog: false,
      valid: false,
      task: null as Task | null,
      event: {
        name: "",
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
            (task) => task.id === this.eventId
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

      this.$accessor.log.addLog({
        event: `end adding event ${this.eventId}`,
        timestamp: new Date(),
      });

      const start = dayjs(
        `${this.$constants.DEFAULT_DATE} 09:00`,
        "YYYY-MM-DD HH:mm"
      );
      const end = start.add(this.event.duration, "minute");
      const event: Event = {
        id: this.$accessor.event.lastEventId + 1,
        name: this.event.name,
        start: start.toDate(),
        end: end.toDate(),
        timed: true,
        fixed: this.task?.fixed || false,
        type: "normal",
        color: this.task
          ? this.task.color
          : this.$constants.CALENDAR_COLORS[
              (this.$accessor.event.lastEventId + 1) %
                this.$constants.CALENDAR_COLORS.length
            ],
      };

      this.$emit("close-event-form");
      this.$accessor.event.addEvent(event);
      this.$emit("add-event");

      this.resetEvent();
    },
    resetEvent() {
      this.event.name = "";
      this.event.duration = 1;

      const form = this.$refs.form as VForm;
      form.resetValidation();
    },
  },
});
</script>
