<template>
  <v-container>
    <v-sheet height="64">
      <v-toolbar flat>
        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday"
          >今日</v-btn
        >
        <v-btn fab text small color="grey darken-2" @click="prev">
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab text small color="grey darken-2" @click="next">
          <v-icon small>mdi-chevron-right</v-icon>
        </v-btn>
        <v-toolbar-title v-if="$refs.calendar">{{
          $refs.calendar.title
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-sheet>
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        color="primary"
        type="4day"
        :events="tasks"
        :event-color="getEventColor"
        :event-ripple="false"
        @change="fetchEvents"
        @mousedown:event="startDrag"
        @mousedown:time="startTime"
        @mousemove:time="mouseMove"
        @mouseup:time="endDrag"
        @mouseleave.native="cancelDrag"
      >
        <template #event="{ event, timed, timeSummary }">
          <div class="v-event-draggable">
            <div class="v-event-summary">
              <strong>{{ event.name }}</strong
              >, {{ timeSummary() }}
              <p class="mb-0">min: {{ taskEstimate(event).min }} minutes</p>
              <p class="mb-0">max: {{ taskEstimate(event).max }} minutes</p>
            </div>
          </div>
          <div v-if="timed" class="v-event-drag-bottom"></div>
        </template>
      </v-calendar>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import { Task } from "~/types/task";

export default Vue.extend({
  data: () => ({
    value: dayjs().format("YYYY-MM-DD"),
    start: dayjs().format("YYYY-MM-DD"),
    end: dayjs().add(3, "day").format("YYYY-MM-DD"),
    tasks: [] as Task[],
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
        const newEvent = {
          ...this.dragEvent,
          start: newStart,
          end: newEnd,
        };
        this.$accessor.task.updateTask(newEvent);
        // this.fetchEvents({ start: this.start, end: this.end });
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
    setToday() {
      this.value = dayjs().format("YYYY-MM-DD");
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
    fetchEvents(to?: any) {
      const tasks = [] as Task[];

      if (to && to.start && to.end) {
        this.start = to.start.date;
        this.end = to.end.date;
      }
      const startDay = dayjs(this.start).startOf("day");
      const endDay = dayjs(this.end).endOf("day");

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
    },
    estimate(task: Task) {
      return this.$estimate.estimate(task);
    },
  },
});
</script>

<style scoped lang="scss">
.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: "";
  }

  &:hover::after {
    display: block;
  }
}
</style>
