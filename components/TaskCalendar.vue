<template>
  <v-container fluid>
    <v-sheet>
      <component
        :is="eventTypeComponent"
        ref="calendar"
        v-model="value"
        :event-ripple="false"
        :events="events"
        :hide-header="true"
        color="primary"
        interval-minutes="15"
        :interval-count="(60 / 15) * 24"
        type="day"
        @change="fetchEvents"
        @mousedown:event="startDrag"
        @mousedown:time="startTime"
        @mousemove:time="mouseMove"
        @mouseup:time="endDrag"
        @mouseleave.native="cancelDrag"
      >
        <template #event="{ event, timed, timeSummary, eventSummary }">
          <CalendarEventGradation
            :time-summary="timeSummary"
            :event-summary="eventSummary"
            :timed="timed"
            :event="event"
            :estimate-result="event.estimateResult"
          >
          </CalendarEventGradation>
        </template>
      </component>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import { Task } from "~/types/task";
import CalendarEventGradation from "~/components/CalendarEventGradation.vue";

export type DataType = {
  value: string;
  type: string;
  tasks: Task[];
  events: any[];
  dragEvent: any | null;
  dragStart: any | null;
  dragTime: any | null;
};

export default Vue.extend({
  components: {
    CalendarEventGradation,
  },

  data: (): DataType => {
    return {
      value: "",
      type: "B2",
      tasks: [] as Task[],
      events: [] as any[],
      dragEvent: null,
      dragStart: null,
      dragTime: null,
    };
  },
  computed: {
    taskEstimate: function () {
      return (taskIdx: number) => {
        const task = this.tasks[taskIdx];
        return this.$estimate.estimate(task);
      };
    },
    tasksWithEstimateResult: function () {
      return this.tasks.map((task, index) => {
        return {
          ...task,
          // @ts-ignore
          estimateResult: this.taskEstimate(index),
        };
      });
    },
    eventTypeComponent: function () {
      return "TaskCalendarEventType" + this.type;
    },
  },
  mounted() {
    this.value = this.$constants.DEFAULT_DATE;
    this.fetchEvents();

    this.$store.subscribe((mutation, state) => {
      if (
        mutation.type === "tasks/updateTask" ||
        mutation.type === "tasks/addTask"
      ) {
        this.tasks = state.tasks.tasks;
        this.fetchEvents();
      }
    });
  },
  methods: {
    updateEvents() {
      this.events = this.tasksWithEstimateResult;
    },
    startDrag({ event, timed }) {
      if (event.fixed === true) return;

      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
      }
    },
    toTime(tms) {
      return new Date(
        tms.year,
        tms.month - 1,
        tms.day,
        tms.hour,
        tms.minute
      ).getTime();
    },
    startTime(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;

        this.dragTime = mouse - start;
      }
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime !== null) {
        // イベントの移動
        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = new Date(this.roundTime(newStartTime));
        const newEnd = new Date(newStart.getTime() + duration);

        this.dragEvent.start = newStart;
        this.dragEvent.end = newEnd;
      }
    },
    endDrag(tms) {
      if (this.dragEvent && this.dragTime !== null) {
        const mouse = this.toTime(tms);

        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = new Date(this.roundTime(newStartTime));
        const newEnd = new Date(newStart.getTime() + duration);
        const dragTask = this.tasks.find(
          (task) => task.id === this.dragEvent.id
        );
        if (dragTask) {
          const newEvent = {
            ...dragTask,
            start: newStart,
            end: newEnd,
          };
          this.$accessor.task.updateTask(newEvent);
        }
      }
      this.dragTime = null;
      this.dragEvent = null;
    },
    cancelDrag() {
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 1; // minutes
      const roundDownTime = roundTo * 60 * 1000;

      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime));
    },
    fetchEvents() {
      const tasks: Task[] = [];

      const startDay = dayjs(this.value).startOf("day");
      const endDay = dayjs(this.value).endOf("day");

      this.$accessor.task.tasks.forEach((task) => {
        const eventStart = dayjs(task.start);
        const eventEnd = dayjs(task.end);
        if (eventStart >= startDay && eventEnd <= endDay) {
          const newTask: Task = {
            ...task,
          };
          tasks.push(newTask);
        }
      });
      this.tasks = tasks;
      this.updateEvents();
    },
  },
});
</script>
