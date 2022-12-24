<template>
  <v-container fluid style="height: 89vh">
    <v-sheet width="50%" height="100%" class="overflow-y-auto">
      <TaskCalendarGradation
        ref="calendar"
        v-model="value"
        :event-color="getEventColor"
        :event-ripple="false"
        :events="tasksWithEstimateResult"
        :hide-header="true"
        :interval-count="(24 * 60) / 5"
        color="primary"
        first-interval="0"
        interval-minutes="5"
        type="day"
        @change="fetchEvents"
        @mousedown:event="startDrag"
        @mousedown:time="startTime"
        @mousemove:time="mouseMove"
        @mouseup:time="endDrag"
        @mouseleave.native="cancelDrag"
      >
        <template #event="{ event, timed, timeSummary }">
          <CalendarEventGradation
            :time-summary="timeSummary"
            :timed="timed"
            :event="event"
            :estimate-result="taskEstimate(event)"
          >
          </CalendarEventGradation>
        </template>
      </TaskCalendarGradation>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import { Task, TaskWithEstimateResult } from "~/types/task";
import { EstimateResult } from "~/plugins/estimate";
import CalendarEventGradation from "~/components/CalendarEventGradation.vue";
import TaskCalendarGradation from "~/components/TaskCalendarGradation.vue";

export default Vue.extend({
  components: { TaskCalendarGradation, CalendarEventGradation },
  data: () => ({
    value: dayjs().format("YYYY-MM-DD"),
    tasks: [] as Task[],
    tasksWithEstimateResult: [] as TaskWithEstimateResult[],
    dragEvent: null as any,
    dragStart: null as any,
    dragTime: null as any,
    createStart: null as any,
    extendOriginal: null as any,
    taskEstimateResult: {},
  }),
  mounted() {
    this.$store.watch(
      (state) => state.task.tasks,
      (tasks) => {
        this.tasks = tasks;
        this.tasksWithEstimateResult = tasks.map((task) => {
          return {
            ...task,
            estimateResult: this.taskEstimate(task),
          };
        });
      }
    );
  },
  methods: {
    taskEstimate(task: Task) {
      if (this.taskEstimateResult[task.id]) {
        return this.taskEstimateResult[task.id];
      } else {
        this.taskEstimateResult[task.id] = this.estimate(task);
        return this.estimate(task);
      }
    },
    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
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
      this.createStart = null;
      this.extendOriginal = null;
    },
    cancelDrag() {
      this.createStart = null;
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
    getEventColor(task: Task) {
      return task.color;
    },
    fetchEvents() {
      const tasks = [] as Task[];

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

      this.tasksWithEstimateResult = [] as TaskWithEstimateResult[];
      this.tasks.forEach((task) => {
        this.tasksWithEstimateResult.push({
          ...task,
          estimateResult: this.taskEstimate(task) as EstimateResult,
        });
      });
    },
    estimate(task: Task) {
      return this.$estimate.estimate(task);
    },
  },
});
</script>
